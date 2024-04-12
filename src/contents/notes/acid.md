# ACID

Properties of relational databases that ensure data integrity while dealing with concurrent transactions

## Atomicity

- Either all operations in transaction succeed or none
- Failure in any operation rollback whole transaction
- Example : failure during money transfer must keep balance unchanged

## Consistency

- All transactions must follow database constraints
- Example : child record cannot belong to nonexistent parent record

## Isolation

Concurrent transactions don’t interfere with each other

**Lock**

- Shared (S) lock : multiple transactions can hold the lock & locked rows are read-only
- Exclusive (X) lock : only one transaction can hold the lock & read or write locked rows

**Read phenomena**

- Dirty read : uncommitted changes from other transactions are visible
- Non-repeatable read : other transactions updated data and committed in between
- Phantom read : other transactions inserted/deleted data and committed in between
- Serialization anomaly : executing concurrent transactions in different order yields different results

**Example of dirty read**

1. First transaction deduct money from an account
2. Second transaction find balance of the same account deducted
3. First transaction revert its changes
4. Account balance remain unchanged but second transaction saw it deducted

<aside>
 With read committed isolation level, step 2 wouldn’t occur

</aside>

**Example of non-repeatable read**

1. First transaction check for balance of an account
2. Second transaction withdraw money from the same account and commit
3. First transaction check for balance again
4. First transaction find different balance amount

<aside>
 With repeatable read isolation level, step 4 wouldn’t occur

</aside>

**Example of phantom read**

1. Seller start transaction and check for pending orders
2. Seller realized all pending orders were shipped
3. Customer start transaction, place a new (pending) order and commit
4. Seller recheck pending orders and found a new order (read committed)
5. Seller mark all pending orders except the new order as shipped

<aside>
 With serializable isolation level, step 3 wouldn’t occur

</aside>

**Example of serialization anomaly**

1. Running seller and customer transactions from phantom read serially
2. If seller transaction run and commit first, seller won’t see the new order
3. If customer transaction run and commit first, seller would see the newly placed order
4. Running both transactions in different order yields different results

<aside>
 With serializable isolation level, step 3 and 4 wouldn’t occur

</aside>

**Implementation**

| Isolation level | Read | Write |
| :---: | :---: | :---: |
| Read uncommitted | No lock | X lock |
| Read committed | Fresh database snapshot | X lock |
| Repeatable read | Database snapshot at transaction start | X lock |
| Serializable | S lock | X lock |

**Prevention**

| Isolation level | Dirty read | Non-repeatable read | Phantom read |
| :---: | :---: | :---: | :---: |
| Read uncommitted | ❌ | ❌ | ❌ |
| Read committed | ✅ | ❌ | ❌ |
| Repeatable read | ✅ | ✅ | ❌ |
| Serializable | ✅ | ✅ | ✅ |

**Remarks**

- Modifications made within transaction are visible to transaction itself
- Read uncommitted prioritize performance over data integrity. It doesn’t require lock to read which allows it to read uncommitted changes
- Serialization anomaly is not possible in serializable isolation level

## Durability

- Once transaction commits, it’s results are written to persistent storage
- Changes by transaction still remain despite system failure