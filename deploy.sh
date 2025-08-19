#!/bin/bash
 
echo "==============================="
echo "🚀 Starting Vite Frontend Deployment"
echo "==============================="
 
# Pull latest code
echo "📥 Pulling latest code from git..."
git pull
 
# Stop running container if exists
echo "🛑 Stopping old container (if any)..."
sudo docker stop frontend-container || true
 
# Remove old container if exists
echo "🧹 Removing old container (if any)..."
sudo docker rm frontend-container || true
 
# Build new docker image
echo "🐳 Building new Docker image for Vite app..."
sudo docker build -t frontend:latest .
 
# Run new container
echo "🚀 Running new container..."
sudo docker run -d --name frontend-container -p 3000:3000 frontend:latest
 
echo "=================================="
echo "🎉 Deployment Completed Successfully"
echo "✅ App Running At: http://your-server-ip:3000"
echo "=================================="