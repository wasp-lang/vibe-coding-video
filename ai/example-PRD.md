# Collaborative Envelope Budgeting App PRD

## Overview

Create a collaborative envelope budgeting web application using the Wasp framework and Shadcn-ui components, leveraging the existing project template. The application will allow users to manage a personal budget, invite collaborators, and track transactions manually or via CSV import. The focus is on a functional, personal-use application built incrementally using a vertical slice approach suitable for LLM-assisted development.

## Core Features

1.  **Single Budget Profile per User:** Each user manages one primary budget.
2.  **Collaboration:** Users can invite others via email to view and/or edit their budget.
3.  **Manual Transaction Entry:** Users can manually input individual income and expense transactions.
4.  **CSV Transaction Import:**
    *   Users can upload CSV files containing transaction data (e.g., from bank statements).
    *   The import process must allow users to map the columns from their specific CSV file to predefined application fields (Date, Description, Amount, Type (Income/Expense)). The system should not assume a fixed CSV format.
5.  **Envelope Budgeting:** Users can create budget categories (envelopes) and assign transactions to them.

## Implementation Guidelines

*   **Framework & Libraries:** Utilize Wasp for full-stack development (including Auth, database operations) and Shadcn-ui for UI components.
*   **Styling & Structure:** Follow the patterns and styling established in the existing demo features within the `src/features` directory of the template project.
*   **Development Approach:** Employ a vertical slice implementation strategy. Start with the most basic, end-to-end version of a feature and incrementally add complexity. This approach is suitable for LLM-assisted coding.
*   **Scope:** Focus on core functionality for personal use; avoid over-engineering for enterprise-level features initially.