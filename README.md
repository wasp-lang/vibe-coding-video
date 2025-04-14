# Vibe Coding a Full-Stack Budget App: YouTube Series Starter

[![Link to YouTube Video](https://img.youtube.com/vi/YOUR_YOUTUBE_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=YOUR_YOUTUBE_VIDEO_ID) 

This repository contains the starter code for the walkthrough video demonstrating how to "vibe code" a full-featured, full-stack web application using Wasp, React, Shadcn/ui, and AI assistance (like Cursor + Gemini 2.5 Pro).

The goal is to showcase a realistic workflow for building complex applications collaboratively with an AI, focusing on a vertical slice approach to deliver features incrementally. 

We'll be building a collaborative envelope budgeting app inspired by tools like YNAB.

## Tech Stack

*   **Framework:** [Wasp](https://wasp-lang.dev/) - A full-stack framework using a declarative DSL to integrate React, Node.js, and Prisma. It handles boilerplate like auth, database operations, and build processes.
*   **UI Components:** [Shadcn-admin](https://github.com/satnaing/shadcn-admin/) - Admin Dashboard UI built with Shadcn and Vite.
*   **AI Assistance:** [Cursor](https://cursor.sh/) / Gemini 2.5 Pro (or your preferred AI coding tool)

## The Workflow (As Seen in the Video)

The YouTube video demonstrates a workflow similar to this:

1.  **Understanding the Goal:** Defining the features of the collaborative budgeting app.
2.  **AI Setup:** Ensuring the AI (Cursor) has access to the project rules (`./cursor/rules/`).
3.  **PRD (Product Requirements Document):** Collaboratively defining the app's requirements with the AI.
4.  **Planning:** Breaking down the PRD into actionable, step-by-step implementation tasks suitable for the vertical slice approach.
5.  **Implementation (Vertical Slices):**
    *   Pick a small, end-to-end feature slice (e.g., basic manual transaction entry).
    *   Define the necessary database models (`schema.prisma`).
    *   Define Wasp operations (queries/actions) in `main.wasp`.
    *   Implement server logic for operations (`src/server/...`).
    *   Build the UI components (`src/client/...` or `src/features/...`).
    *   Connect UI to backend using Wasp operations.
    *   Test and refine.
6.  **Documentation:** Asking the AI to document implemented features (e.g., in `ai/docs/`).
7.  **Iteration:** Repeating the process for subsequent features, building upon the existing foundation, and revising the PLAN on-the-go as needed.

## Getting Started (Following Along)

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/wasp-lang/vibe-coding-video.git
    cd vibe-coding-video
    ```
2.  **Install Wasp:** 
    ```bash
    curl -sSL https://get.wasp.sh/installer.sh | sh
    ```
3.  **Set up Environment Variables:**
    *   Copy the example server environment file: `cp .env.server.example .env.server`
4.  **Database Setup:**
    * Start a local PostgreSQL instance (make sure to have [docker](https://www.docker.com/) installed and running)
        ```bash
        wasp db start
        ```
    *   Run the initial database migration:
        ```bash
        wasp db migrate-dev
        ```
5.  **Start the Development Server:**
    ```bash
    wasp start
    ```
    This will launch the frontend (React app) and the backend server. Open your browser to `http://localhost:3000`.

## Project Structure & Key Concepts

*   `main.wasp`: The heart of the Wasp application. Defines routes, pages, operations (queries/actions), auth methods, jobs, APIs, etc. See [Rule 1](.cursor/rules/1-wasp-overview.mdc).
*   `schema.prisma`: Defines the database models (entities). See [Rule 3](.cursor/rules/3-database-operations.mdc).
*   `src/`: Contains your custom React (client) and Node.js (server) code.
    *   `src/features/`: Fullstack code is organized by feature (e.g., `auth`, `transactions`).
    *   `src/components/`: Reusable UI components, including those based on Shadcn/ui. See [Rule 5](.cursor/rules/5-frontend-styling.mdc).
*   `.cursor/rules/`: Contains detailed markdown files explaining project conventions, Wasp features, and best practices used in this project. **Crucial for guiding the AI.**

Refer to the `.cursor/rules/` directory for in-depth explanations of:
*   Wasp Overview & Core Concepts ([Rule 1](.cursor/rules/1-wasp-overview.mdc))
*   Project Conventions ([Rule 2](.cursor/rules/2-project-conventions.mdc))
*   Database, Entities & Operations ([Rule 3](.cursor/rules/3-database-operations.mdc))
*   Authentication ([Rule 4](.cursor/rules/4-authentication.mdc))
*   Frontend & Styling ([Rule 5](.cursor/rules/5-frontend-styling.mdc))
*   Advanced Features & Troubleshooting ([Rule 6](.cursor/rules/6-advanced-troubleshooting.mdc))
*   Possible Solutions Thinking Command ([Rule 7](.cursor/rules/7-possible-solutions-thinking.mdc)) **pass this in manually with @ in the cursor chat**
*   Deployment guidelines ([Rule 8](.cursor/rules/8-deployment.mdc))
