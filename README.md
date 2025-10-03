# Yusuf Ali - Developer Portfolio

A modern, production-ready developer portfolio website showcasing full-stack development expertise, projects, and skills.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Features

- Modern, responsive design with dark theme
- Smooth animations and transitions
- Full-stack project showcase
- Skills visualization with progress bars
- Contact form with social links
- SEO optimized
- Docker containerized
- Automated CI/CD deployment

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Container**: Docker, Nginx
- **CI/CD**: GitHub Actions

## Quick Start

### Prerequisites

- Node.js 20+
- npm or yarn
- Docker (optional)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yusufdupsc1/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## Docker Deployment

### Using Docker Compose (Recommended)

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up -d
   ```

2. **Access the application**
   ```
   http://localhost:3000
   ```

3. **View logs**
   ```bash
   docker-compose logs -f
   ```

4. **Stop the container**
   ```bash
   docker-compose down
   ```

### Using Docker Directly

1. **Build the Docker image**
   ```bash
   docker build -t yusuf-portfolio .
   ```

2. **Run the container**
   ```bash
   docker run -d -p 3000:80 --name portfolio yusuf-portfolio
   ```

3. **Access the application**
   ```
   http://localhost:3000
   ```

### Development Mode with Docker

For hot-reload during development:

```bash
docker-compose --profile dev up portfolio-dev
```

Access at: `http://localhost:5173`

## CI/CD Pipeline

This project uses GitHub Actions for automated deployment.

### Automated Workflows

#### 1. Deploy to Vercel (`deploy.yml`)
Automatically deploys to Vercel on every push to main/master branch.

**Workflow includes:**
- Code quality checks (linting, type checking)
- Build verification
- Docker image build
- Vercel production deployment
- Preview deployments for PRs

#### 2. Docker Build and Push (`docker.yml`)
Builds and pushes Docker images to GitHub Container Registry.

**Workflow includes:**
- Multi-platform builds (amd64, arm64)
- Image tagging (latest, version, SHA)
- Vulnerability scanning with Trivy
- GitHub Container Registry push

### Setup GitHub Actions

1. **Fork/Clone this repository**

2. **Add Vercel Secrets to GitHub**

   Go to: `Settings > Secrets and variables > Actions`

   Add these secrets:
   ```
   VERCEL_TOKEN          - Your Vercel API token
   VERCEL_ORG_ID         - Your Vercel organization ID
   VERCEL_PROJECT_ID     - Your Vercel project ID
   ```

3. **Get Vercel Credentials**
   ```bash
   # Install Vercel CLI
   npm install -g vercel

   # Login to Vercel
   vercel login

   # Link your project
   vercel link

   # Get credentials from .vercel/project.json
   cat .vercel/project.json
   ```

4. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

5. **Automatic Deployment**
   - Every push to `main` triggers production deployment
   - Pull requests create preview deployments
   - Docker images are built and pushed automatically

### Manual Vercel Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

## Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       ├── deploy.yml        # Vercel deployment workflow
│       └── docker.yml        # Docker build workflow
├── src/
│   ├── components/
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Skills.tsx       # Skills section
│   │   ├── Experience.tsx   # Experience timeline
│   │   ├── Projects.tsx     # Projects showcase
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── Dockerfile               # Production Docker image
├── docker-compose.yml       # Docker Compose configuration
├── nginx.conf              # Nginx server configuration
├── vercel.json             # Vercel configuration
├── .dockerignore           # Docker ignore rules
└── README.md               # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Environment Variables

Create a `.env` file in the root directory (if needed):

```env
# Add your environment variables here
# Example:
# VITE_API_URL=https://api.example.com
```

## Performance Optimizations

- Code splitting and lazy loading
- Optimized images and assets
- Gzip compression (Nginx)
- Cache headers for static assets
- Minified CSS and JavaScript
- Tree-shaking unused code

## Security Features

- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- HTTPS enforced on Vercel
- Docker vulnerability scanning
- No sensitive data in client-side code

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Yusuf Ali**
- Portfolio: [ali-3d-portfolio.vercel.app](https://ali-3d-portfolio.vercel.app)
- Email: yusufdupsc1@gmail.com
- GitHub: [@yusufdupsc1](https://github.com/yusufdupsc1)
- LinkedIn: [Yusuf Ali](https://linkedin.com/in/yusuf-ali-16b890216)
- Twitter: [@EsrafilSaikot](https://twitter.com/EsrafilSaikot)

## Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide](https://lucide.dev)
- Deployed on [Vercel](https://vercel.com)

---

<div align="center">
  <p>Made with ❤️ by Yusuf Ali</p>
  <p>
    <a href="https://github.com/yusufdupsc1">GitHub</a> •
    <a href="https://linkedin.com/in/yusuf-ali-16b890216">LinkedIn</a> •
    <a href="mailto:yusufdupsc1@gmail.com">Email</a>
  </p>
</div>
