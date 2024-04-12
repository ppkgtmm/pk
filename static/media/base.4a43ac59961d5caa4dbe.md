# BASE

- Properties of databases that are opposite of ACID

## Basically Available

- Data is distributed across nodes for availability and concurrent access
- Requests get served as long as there is an active node

## Soft State

- Data may change over time without external inputs
- Soft state is required for eventual consistency

## Eventually Consistent

- Data will become consistent across nodes given enough time
- Users might see different view of data that eventually converges
