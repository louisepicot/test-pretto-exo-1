---
description: Code quality standards and best practices for maintaining high-quality codebase
globs: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"]
---

# Code Quality Standards

## Code Review Checklist

- Code follows project conventions and style guide
- Functions are small and focused (single responsibility)
- No code duplication (DRY principle)
- Proper error handling implemented
- Edge cases are handled
- Code is self-documenting with meaningful names
- Comments explain "why" not "what"

## Complexity Management

- Cyclomatic complexity should be kept low (< 10 per function)
- Avoid deeply nested conditionals (max 3 levels)
- Extract complex logic into well-named functions
- Use early returns to reduce nesting
- Break down large functions into smaller ones

## Maintainability

- Code is easy to understand for new team members
- Consistent patterns throughout the codebase
- Proper separation of concerns
- Clear module boundaries
- Minimal coupling between modules

## Performance Considerations

- Avoid premature optimization
- Profile before optimizing
- Use appropriate data structures
- Minimize unnecessary computations
- Implement proper caching strategies

## Security

- Validate all user inputs
- Sanitize data before rendering
- Use parameterized queries for database operations
- Avoid exposing sensitive information
- Follow OWASP best practices

## Testing Standards

- Code coverage should be maintained (> 80%)
- Tests are readable and maintainable
- Edge cases are tested
- Error scenarios are covered
- Tests run fast and are isolated

## Documentation

- Public APIs are documented
- Complex algorithms have explanations
- README files are kept up to date
- Code examples are provided where helpful
- Architecture decisions are documented
