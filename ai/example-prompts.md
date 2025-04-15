## Prompts Used in the Video

### PRD / initial prompt

> I want to create a collaborative envelope budgeting app with the current template project I'm in which uses Wasp and Shadcn-ui components (it's an admin dashboard). Leveraging Wasp's full-stack features (such as Auth), let's build the app based on the following spec: - User's have one budget profile they use. - User's can invite others to collaborate on the budget with them via their email. - Transactions can be individually entered manually or bulk imported via csv files from their bank. - Bulk import shouldn't assume a certain csv file format, but rather map the headers to a set of predefined values within the app (e.g. Date, Description, Value, Type (expense or income)). - New features should be styled and created using the demo features in `src/features` as examples. - Use a modified vertical slice implmentation approach that's suitable for LLM-assisted coding. 

> With this in mind, I want you to first evaluate the project template and think about a few possible PRD approaches before landing on the best one. Provide reasoning why this would be the best approach. Remember we're using Wasp, a full-stack framework with batteries included, that can do some of the heavy lifting for us, we don't need to create an enterprise-level app (it will be for personal use), and we want to use a vertical slice implementation approach so we can start with basic implementations of features first, and add on complexity from there

### Plan prompt

> From this PRD, create an actionable, step-by-step plan that we can use as a guide for LLM-assisted coding. Before you create the plan, think about a few different plan styles that would be suitable for this project and the implmentation style before selecting the best one. Give your reasoning for why you think we should use this plan style. Remember that we will constantly refer to this plan to guide our coding implementation so it should be well structured, concise, and actionable, while still providing enough information to guide the LLM.

### Doc prompt

> Great. Now that we've finished implementing that phase can you please document it in `ai/docs` according to the predefined conventions. Remeber you don't need to repeat info that already exists in project files, rather describe the implementation--and point to the file where the implementation can be found--so that it can be referenced by human