import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefixed with /api
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'КриптоЗащита API работает' });
  });

  // Define API route for download stats (mock data)
  app.get('/api/stats', (req, res) => {
    res.json({
      users: 512750,
      rating: 4.8,
      reliability: 99.9,
      support: "24/7"
    });
  });

  // API route to get system requirements
  app.get('/api/requirements', (req, res) => {
    res.json({
      windows: "Windows 10/11, 4GB RAM, 100MB свободного места",
      macos: "macOS 10.14+, 4GB RAM, 120MB свободного места",
      linux: "Ubuntu 18.04+, 4GB RAM, 80MB свободного места"
    });
  });

  // API route for features list
  app.get('/api/features', (req, res) => {
    res.json([
      {
        title: "Мощное шифрование",
        description: "Используйте современные алгоритмы шифрования AES-256, RSA и другие для надежной защиты файлов."
      },
      {
        title: "Защита файлов",
        description: "Шифруйте любые типы файлов — документы, фотографии, видео и другие данные без потери качества."
      },
      {
        title: "Защищенные сообщения",
        description: "Обменивайтесь зашифрованными сообщениями, которые могут прочитать только получатели с ключом."
      },
      {
        title: "Управление ключами",
        description: "Создавайте, храните и управляйте ключами шифрования для максимальной безопасности."
      },
      {
        title: "Шифрование дисков",
        description: "Защищайте целые диски или разделы для комплексной защиты всех хранящихся данных."
      },
      {
        title: "Простой интерфейс",
        description: "Интуитивно понятный интерфейс позволяет начать использование сразу после установки."
      }
    ]);
  });

  // Handle download request (simulated)
  app.get('/api/download/:platform', (req, res) => {
    const { platform } = req.params;
    
    // In a real implementation, this would serve an actual file
    // For now, we'll just return a success message
    res.json({
      success: true,
      message: `Скачивание КриптоЗащиты для ${platform} началось`,
      platform: platform,
      version: "1.2.3"
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
