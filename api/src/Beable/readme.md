# Beable

The beable folder gathers all the traits.

## Rules of thumb

- In the context of this project, any property or group of properties (that have a common meaning) of a class that
  is not a relation must be externalized into a trait.
- The getters and setters of the property or group of properties must be included in the trait.
- The trait should not contain specific attributes/methods, only attributes/methods defining a general expression.
- The visibility of properties must be protected.
- The visibility of the methods must be protected or public.
- A trait can use another trait.
- Properties, methods and attributes must be sorted in alphabetical order.
- Fluent methods return static.
- All lengths in the asserts must be a (power of 2) - 1.

## Naming conventions

- For trait naming, suffix the name of the property or property group in English with "able".
- For group property and repeatable property naming, prefix the property with the name of the trait.
