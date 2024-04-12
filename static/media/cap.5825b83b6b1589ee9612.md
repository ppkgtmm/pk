# CAP & PACELC

- CAP theorem (Brewer’s theorem) and PACELC theorem apply to distributed data stores
- PACELC theorem states about absence of network partition which wasn’t mention in CAP theorem

## CAP Theorem

- Any distributed data store can provide only 2 of the 3 following guarantees

**Consistency**

- All nodes of distributed data store have same data at any given time
- Result of successful write operations must be reflected in all nodes

**Availability**

- Every valid request receives response if there is at least 1 node running
- The exception is when there are no nodes running

**Partition Tolerance**

- Active nodes continue to operate despite lost or delayed communication with other nodes
- When partitioned node receives a request, it must serve the request

<aside>Choosing between the guarantees</aside>

**Consistency + Availability**

- Both consistency and availability are non-negotiable; hence, network partition cannot be tolerated
- Solution : remove partitioned node and continue serving requests
- There will be data loss if changes in the partitioned node hasn’t been reflected to other nodes before network partition

**Consistency + Partition Tolerance**

- Consistency is non-negotiable regardless of network partition
- Solution : become unavailable to avoid inconsistencies until network partition is resolved

**Availability + Partition Tolerance**

- Availability is non-negotiable regardless of network partition
- Solution : sacrifice consistency for availability upon network partition

## PACELC Theorem

- Network partition (P) : lost or delayed communication between nodes
- Availability (A) : providing response as long as a node is running
- Consistency (C) : all nodes have same data at any given time
- Else (E) : lack of network partition
- Latency (L) : time required for response

**Mentioned in CAP Theorem**

- Network Partition + Availability : sacrifice consistency
- Network Partition + Consistency : become unavailable

**Extension to CAP Theorem**

- No Network Partition + Latency : prioritize latency over consistency with asynchronous replication
- No Network Partition + Consistency : sacrifice latency for consistency with synchronous replication