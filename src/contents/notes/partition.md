# Data Partitioning

- Data partitioning is dividing data into subsets called partitions
- There are 2 ways that a dataset can be partitioned

## Horizontal Partitioning

- Each partition contains all attributes but a subset of records
- Data is partitioned based on value of attribute(s) or partition key
- Reduce records scanned and improve performance when queried using partition key

## Vertical Partitioning

- Each partition contains all records but a subset of attributes
- Partitions can contain common attribute(s) as a link between them
- Allows loading only relevant attributes and reduce data transferred

| Description | Horizontal | Vertical |
| --- | --- | --- |
| Read & write few records | ✅ | ❌ |
| Query subset of attributes | ❌ | ✅ |

## Sharding

- Distributes horizontal partitions or shards across multiple nodes
- Allow placing partitions near users and enable partitions to be replicated independently
- Requires technique to route requests to correct shard

**Terminologies**

- Logical shards are horizontal partitions of data
- Physical shards are nodes holding logical shard

<aside>
A physical shard can hold multiple logical shards

</aside>

### Routing Technique

Helps determine which shard each record belongs to

**Range-based Sharding**

- Uses order of attribute(s) to separate records
- Example : records with shard key from 1 to 10 belongs to shard 1 whereas records with shard key from 11 to 20 belong to shard 2

**Hash-based Sharding**

- Applies a hash function on attribute(s) to decide destination shard of records
- Example : with hash function shard key mod 2, records with shard key as odd number belong to shard 1 while records with shard key as even number belongs to shard 2

### Advantage

- Enable scalability for large datasets & load balancing
- Shorten response time as queries go over fewer rows

### Drawbacks

- Extra complexity for operations involving multiple shards
- Trade off between latency and data integrity for operations involving multiple shards
- Hotspot or uneven data distribution among shards