# Beable

The beable folder gathers all the traits.

## Rules of thumb

- In the context of this project, any property or group of properties (that have a common meaning) of a class that is not a relation must be externalized into a trait.
- The getters and setters of the property or group of properties must be included in the trait.
- The trait should not contain specific attributes, only attributes defining a general expression.
- The trait should not contain specific methods, only methods defining a general expression.
- The visibility of properties must be protected.
- The visibility of the methods must be protected or public.
- A trait can use another trait.

## Naming conventions

For trait naming, take the name of the property or property group in English and add the suffix "able".
