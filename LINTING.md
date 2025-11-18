# Linting and Validation System

This project has a strict validation system configured that **blocks commits and pushes** if there are code errors.

## Configuration

### ESLint
- Detects unused imports
- Detects unused variables
- Blocks the use of `any`
- Validates React Hooks rules
- **Maximum 0 warnings allowed**

### TypeScript
- Strict type checking
- Detects unused local variables
- Detects unused parameters
- No code emission (verification only)

### Git Hooks (Husky)

#### Pre-commit
Automatically runs before each commit:
- ESLint on modified files (with auto-fix)
- TypeScript type-check on modified files

**If there are errors, the commit is blocked.**

#### Pre-push
Automatically runs before each push:
- Complete TypeScript type-check of the project
- Complete ESLint of the project

**If there are errors, the push is blocked.**

## Manual Commands

```bash
# Run ESLint
yarn lint

# Check TypeScript types
yarn type-check

# Run both
yarn type-check && yarn lint
```

## Main Rules

- ❌ Unused imports are not allowed
- ❌ Unused variables are not allowed
- ❌ Use of `any` is not allowed
- ❌ ESLint warnings are not allowed
- ✅ Code must pass all validations before commit/push
