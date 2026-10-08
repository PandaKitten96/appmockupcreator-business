# AppMockupCreator Testing Strategy

## Objective

The project should be developed with a testing-first mindset to protect product quality, reduce regressions, and ensure the landing page and MVP experience work reliably before new features ship.

## Scope

This testing strategy covers:
- landing page rendering
- core CTA and pricing presence
- UI content integrity
- mockup preview assumptions
- future editor functionality
- build safety before release

## Principles

- tests should validate user-visible behavior, not implementation details
- keep the test suite lightweight and fast
- cover the most important user flows early
- add regression coverage for each new feature
- fail fast on broken build or UI assumptions

## Recommended test layers

### 1. Unit tests
Use for isolated logic such as:
- pricing helper functions
- formatting and conversion logic
- content helpers
- template selection logic

### 2. Component tests
Use to verify:
- hero headline renders
- CTA buttons display
- pricing cards render correctly
- product copy is visible and stable
- feature cards render consistently

### 3. Integration tests
Use for:
- user journey from landing page to plan selection
- CTA navigation steps
- project creation flow when the editor is added

### 4. Build validation
Every change should validate:
- install succeeds
- test suite passes
- production build succeeds

## Testing stack

- Vitest
- @testing-library/react
- @testing-library/jest-dom
- jsdom

## Current coverage baseline

The project currently includes:
- landing page heading assertion
- pricing section assertion
- CTA and content presence checks

This should be expanded as features are added.

## Required future coverage

Before shipping each new feature, add tests for:
- device selection flow
- mockup canvas rendering
- template selection
- export flow initiation
- account creation flow
- pricing gate logic
- free-to-Pro upgrade flow

## CI requirements

All pull requests should run:
- npm install
- npm test
- npm run build

No merge should proceed with failing tests or broken build output.

## Definition of done

A feature is only complete when:
- the component or flow has tests
- the test suite passes locally
- the build passes
- the behavior is documented in the relevant feature notes
