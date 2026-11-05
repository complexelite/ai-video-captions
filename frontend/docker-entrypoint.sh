#!/bin/sh
set -e

# Initialize/check the persistent database before accepting requests.
# Fail visibly if initialization fails; never serve against an absent schema.
node node_modules/prisma/build/index.js db push --skip-generate

# Start the Next.js server
exec node server.js
