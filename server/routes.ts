import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  app.use(
    "/attached_assets",
    express.static(path.join(process.cwd(), "attached_assets"))
  );

  const httpServer = createServer(app);

  return httpServer;
}
