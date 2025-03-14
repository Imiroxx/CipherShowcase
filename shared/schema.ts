import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Downloads tracking schema
export const downloads = pgTable("downloads", {
  id: serial("id").primaryKey(),
  platform: text("platform").notNull(),
  version: text("version").notNull(),
  downloadedAt: text("downloaded_at").notNull(),
  userAgent: text("user_agent"),
  ipAddress: text("ip_address"),
});

// Feature schema for the website
export const features = pgTable("features", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  iconName: text("icon_name").notNull(),
  displayOrder: integer("display_order").notNull(),
});

// FAQ schema
export const faqs = pgTable("faqs", {
  id: serial("id").primaryKey(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  displayOrder: integer("display_order").notNull(),
  isActive: boolean("is_active").notNull().default(true),
});

// Version schema
export const versions = pgTable("versions", {
  id: serial("id").primaryKey(),
  version: text("version").notNull(),
  platform: text("platform").notNull(),
  releaseDate: text("release_date").notNull(),
  fileSize: text("file_size").notNull(),
  downloadUrl: text("download_url").notNull(),
  isLatest: boolean("is_latest").notNull().default(false),
});

// Create insert schemas with zod
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertDownloadSchema = createInsertSchema(downloads).pick({
  platform: true,
  version: true,
  downloadedAt: true,
  userAgent: true,
  ipAddress: true,
});

export const insertFeatureSchema = createInsertSchema(features).pick({
  title: true,
  description: true,
  iconName: true,
  displayOrder: true,
});

export const insertFaqSchema = createInsertSchema(faqs).pick({
  question: true,
  answer: true,
  displayOrder: true,
  isActive: true,
});

export const insertVersionSchema = createInsertSchema(versions).pick({
  version: true,
  platform: true,
  releaseDate: true,
  fileSize: true,
  downloadUrl: true,
  isLatest: true,
});

// Export types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertDownload = z.infer<typeof insertDownloadSchema>;
export type Download = typeof downloads.$inferSelect;

export type InsertFeature = z.infer<typeof insertFeatureSchema>;
export type Feature = typeof features.$inferSelect;

export type InsertFaq = z.infer<typeof insertFaqSchema>;
export type Faq = typeof faqs.$inferSelect;

export type InsertVersion = z.infer<typeof insertVersionSchema>;
export type Version = typeof versions.$inferSelect;
