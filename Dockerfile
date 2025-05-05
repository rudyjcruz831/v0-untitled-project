FROM node:20-alpine AS builder

# Install pnpm and Python
RUN apk add --no-cache python3 py3-pip

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Correctly copy both files
# COPY ./package.json ./pnpm-lock.yaml ./tsconfig.json  ./
COPY ./package.json ./pnpm-lock.yaml ./tsconfig.json ./next.config.mjs ./tailwind.config.ts ./postcss.config.mjs ./


# Install dependencies
RUN pnpm install

# Copy source files
COPY . .

RUN ls -l && ls -l ./app

# Build Next.js application
RUN pnpm run build

FROM node:20-alpine AS runner

# Install pnpm and Python
RUN apk add --no-cache python3 py3-pip

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copy production files
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/app ./app 
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/components ./components
COPY --from=builder /app/utils ./utils
COPY --from=builder /app/lib ./lib
COPY --from=builder /app/styles ./styles
COPY --from=builder /app/tailwind.config.ts ./tailwind.config.ts
COPY --from=builder /app/postcss.config.mjs ./postcss.config.mjs
COPY --from=builder /app/data ./data

# Set up Python virtual environment
RUN python3 -m venv /app/venv
ENV PATH="/app/venv/bin:$PATH"

# Install Python dependencies in virtual environment
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile

# Expose port and start
EXPOSE 3000
# CMD ["pnpm", "start"]

# Run the Next.js server
CMD ["npm", "run", "dev"]
