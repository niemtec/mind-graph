A truth table sets out all possible truth value combinations for the simple component statements and shows each value of the compont statement.

## AND
| p | q | p ∧ q |
|---|---|-------|
| T | T | T     |
| T | F | F     |
| F | T | F     |
| F | F | F     |

## OR (Inclusive)
| p | q | p ∨ q |
|---|---|-------|
| T | T | T     |
| T | F | T     |
| F | T | T     |
| F | F | F     |

## OR (Exclusive)
| p | q | p ⊻ q |
|---|---|-------|
| T | T | F     |
| T | F | T     |
| F | T | T     |
| F | F | F     |

## IMPLICATION
| p | q | p → q |
|---|---|-------|
| T | T | T     |
| T | F | F     |
| F | T | T     |
| F | F | T     |

## IFF
| p | q | p ↔ q |
|---|---|-------|
| T | T | T     |
| T | F | F     |
| F | T | F     |
| F | F | T     |

## Tautologies and Contradictions
[[Tautology|Tautologies]] and [[Contradiction|contradictions]] can be used to construct arguments and proofs.

| p | ¬p | p ∨ ¬p |
|---|----|--------|
| T | F  | T      |
| F | T  | T      |

`p ∨ ¬p` is an example of a [[Tautology]]. `p ∧ ¬p` is an example of a contradiction since it cannot be true (whatever value `p` assumes).


See [[Propositonal Logic]]