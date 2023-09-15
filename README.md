# micro-front-end
#how to create a microfrontend project
use: npx create-mf-app
![Alt text](image.png)

Depending on which app you choose, AppShell or micro
![Alt text](image-1.png)


# recommend: 
- chỉ nên dùng một framework
-
ref: https://micro-frontends.tuando.net/docs/table-of-contents/method/
reference: https://dev.to/devsmitra/the-complete-guide-to-micro-frontend-with-reactjs-for-2022-36b2
# Apply design patterns: actomics design
## 1. Atomic rules
### 1.1 Atoms
- Should not compose other components/only uses native elements or framework-specific components similar to native elements
- Can have its own markup & styles
- Can maintain its own internal state
- Should not be tightly coupled to specific UI or Logic areas
- Should not access application (or higher level) state directly
- Should not have any non-ui/layout related side effects
- Should not implement any application-specific business logic
### 1.2 Molecules
- A component made up of one or more Atoms
- Can have its own markup & styles
- Can maintain its own internal state
- Should not be tightly coupled to specific UI or Logic areas
- Should not access application (or higher level) state directly
- Should not have any non-ui/layout related side effects
- Should not implement any application-specific business logic
### 1.3 Organisms
- A complex component made up of multiple atoms and/or molecules and/or other organisms
- Can have its own markup & styles
- Can fetch application-specific data
- Can implement application-specific business logic
- Can be connected to application (or higher level) state
- Can be tightly coupled with a specific area (UI and/or Logic) of the app
- Can be organized into sub-folders by logical categorization (feature, page, etc...)
### 1.4 Templates
- A component that facilitates the layout of multiple organisms
- Can have its own markup & styles.
- Can accept & pass props as required.
- Should not access application (or higher level) state
- Should not have any non-ui/layout related side effects
- Should not implement any application-specific business logic
### 1.5 Pages
- A component that implements a particular template
- Can fetch application-specific data
- Can implement application-specific business logic
- Can be connected to application (or higher level) state
- Should not have its own markup & styles

ref: https://benjaminwfox.com/blog/tech/atomic-design-for-developers