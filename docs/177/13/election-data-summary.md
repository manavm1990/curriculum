---
sidebar_position: 0
draft: true
---

# Election Data Summary Generator Homework Assignment

If this doesn't sound familiar to you, just skip this lesson. Depending on the class schedule, you may or may not have received this assignment.

## The Problem

We have election data with districts containing precincts, and we need to calculate various totals. Let's think about what kind of operation this is:

1. We're taking a complex data structure
2. We need to transform it into a single summary object
3. We need running totals that build up as we process the data

This is exactly what `reduce` is designed for - transforming an array into a single value (in this case, our summary object).

### Step 1: Understanding What We Need

```javascript
/* WHAT WE HAVE:
{
  districts: [
    {
      precincts: [
        { 
          registeredVoters: 758,
          voterTurnout: 453
        }
      ]
    }
  ]
}

WHAT WE NEED:
{
  totalRegisteredVoters: (sum of all registered),
  totalVoterTurnout: (sum of all turnout),
  averageTurnoutPercentage: (turnout/registered * 100),
  precinctCount: (total number of precincts)
}
*/
```

### Step 2: Breaking Down the Problem

First, let's identify what we need to calculate:

- Sum of registered voters across all precincts in all districts
- Sum of voter turnout across all precincts in all districts
- Total number of precincts across all districts
- The percentage of turnout based on these totals

## Starting Simple: Just Counting Precincts

Let's begin with the simplest part - counting total precincts. First, let's review reduce syntax:

```javascript
array.reduce((accumulator, currentValue) => {
  // modify accumulator based on currentValue
  return accumulator;
}, initialValue);
```

Now, let's count precincts:

```javascript
function countPrecincts(districts) {
  return districts.reduce((total, district) => {
    // Each district has a precincts array, add its length to our total
    console.log("Current total:", total);
    console.log("Adding precincts from district:", district.precincts.length);

    return total + district.precincts.length;
  }, 0); // Start counting from 0
}

// Example usage:
const totalPrecincts = countPrecincts(districts);
console.log("Final count:", totalPrecincts);

/* Console output might show:
Current total: 0
Adding precincts from district: 2
Current total: 2
Adding precincts from district: 2
Final count: 4
*/
```

## Adding Registered Voters

Now let's add another calculation. We'll need to go through each district's precincts:

```javascript
function calculateVoterTotals(districts) {
  return districts.reduce((summary, district) => {
    // For each district, sum up its precincts' registered voters
    const districtRegisteredVoters = district.precincts.reduce(
      (sum, precinct) => sum + precinct.registeredVoters,
      0
    );

    console.log("District registered voters:", districtRegisteredVoters);

    return {
      // Keep existing summary properties
      ...summary,
      // Add to running total of registered voters
      totalRegisteredVoters:
        (summary.totalRegisteredVoters || 0) + districtRegisteredVoters,
      // Keep tracking precinct count too
      precinctCount: (summary.precinctCount || 0) + district.precincts.length,
    };
  }, {}); // Start with empty object
}

/* Console might show:
District registered voters: 2012
Current summary: { totalRegisteredVoters: 2012, precinctCount: 2 }
District registered voters: 3823
Current summary: { totalRegisteredVoters: 5835, precinctCount: 4 }
*/
```

## Adding Voter Turnout

Our summary object is growing. Let's add turnout:

```javascript
function calculateVoterTotals(districts) {
  return districts.reduce((summary, district) => {
    // For each district, calculate both totals
    const districtTotals = district.precincts.reduce(
      (totals, precinct) => ({
        registered: totals.registered + precinct.registeredVoters,
        turnout: totals.turnout + precinct.voterTurnout,
      }),
      { registered: 0, turnout: 0 }
    );

    console.log("District totals:", districtTotals);

    return {
      ...summary,
      totalRegisteredVoters:
        (summary.totalRegisteredVoters || 0) + districtTotals.registered,
      totalVoterTurnout:
        (summary.totalVoterTurnout || 0) + districtTotals.turnout,
      precinctCount: (summary.precinctCount || 0) + district.precincts.length,
    };
  }, {});
}
```

## Adding the Percentage Calculation

Now our summary has raw totals, but we need to calculate the average turnout percentage. Let's look at two approaches:

```javascript
function calculateVoterTotals(districts) {
  return districts.reduce((summary, district) => {
    // Get district totals as before
    const districtTotals = district.precincts.reduce(
      (totals, precinct) => ({
        registered: totals.registered + precinct.registeredVoters,
        turnout: totals.turnout + precinct.voterTurnout,
      }),
      { registered: 0, turnout: 0 }
    );

    // First update our running totals
    const newSummary = {
      ...summary,
      totalRegisteredVoters:
        (summary.totalRegisteredVoters || 0) + districtTotals.registered,
      totalVoterTurnout:
        (summary.totalVoterTurnout || 0) + districtTotals.turnout,
      precinctCount: (summary.precinctCount || 0) + district.precincts.length,
    };

    // Then calculate percentage using the updated totals
    newSummary.averageTurnoutPercentage = Number(
      (
        (newSummary.totalVoterTurnout / newSummary.totalRegisteredVoters) *
        100
      ).toFixed(2)
    );

    console.log("Updated summary:", newSummary);
    return newSummary;
  }, {});
}
```

This works, but we're creating an extra object (`newSummary`) just to calculate the percentage. We could do it all in one step:

```javascript
function calculateVoterTotals(districts) {
  return districts.reduce((summary, district) => {
    const districtTotals = district.precincts.reduce(
      (totals, precinct) => ({
        registered: totals.registered + precinct.registeredVoters,
        turnout: totals.turnout + precinct.voterTurnout,
      }),
      { registered: 0, turnout: 0 }
    );

    // Calculate everything in the return statement
    // This is more concise but harder to read!
    return {
      ...summary,
      totalRegisteredVoters:
        (summary.totalRegisteredVoters || 0) + districtTotals.registered,
      totalVoterTurnout:
        (summary.totalVoterTurnout || 0) + districtTotals.turnout,
      precinctCount: (summary.precinctCount || 0) + district.precincts.length,
      averageTurnoutPercentage: Number(
        (
          (((summary.totalVoterTurnout || 0) + districtTotals.turnout) /
            ((summary.totalRegisteredVoters || 0) +
              districtTotals.registered)) *
          100
        ).toFixed(2)
      ),
    };
  }, {});
}

/* Console might show:
{
  totalRegisteredVoters: 2012,
  totalVoterTurnout: 1237,
  precinctCount: 2,
  averageTurnoutPercentage: 61.48
}
*/
```

## The Problem with Nested Calculations

Notice how our code is getting harder to read? We have:

- A reduce inside a reduce
- Complex percentage calculations
- Multiple properties being updated at once

This is where we start thinking: "There must be a cleaner way!"

Let's look at what we're repeating:

1. Adding up registered voters (twice!)
2. Adding up turnout (twice!)
3. Calculating percentage using these sums

Each time we process a district, we're doing these calculations again. This repetition is a clue that we should extract these operations into helper functions...

## Notice the Pattern

We're doing similar calculations repeatedly:

1. Sum up values from precincts
2. Add to running totals
3. Maintain our summary object

This is where helper functions start making sense! Let's extract these common operations:

### Step 3: Creating Helper Functions

Let's start by making functions for our common calculations:

```javascript
// Helper to sum up registered voters from a precinct array
function getTotalRegisteredVoters(precincts) {
  return precincts.reduce(
    (total, { registeredVoters }) => total + registeredVoters,
    0
  );
}

// Helper to sum up voter turnout from a precinct array
function getTotalVoterTurnout(precincts) {
  return precincts.reduce((total, { voterTurnout }) => total + voterTurnout, 0);
}
```

### Step 4: Building the Final Solution

```javascript
function generateTurnoutSummary(districts) {
  // Use reduce to build our entire summary in one pass through the districts
  return districts.reduce(
    (summary, { precincts }) => ({
      // Spread existing summary to maintain other properties
      ...summary,

      // Add this district's registered voters to running total
      totalRegisteredVoters:
        (summary.totalRegisteredVoters || 0) +
        getTotalRegisteredVoters(precincts),

      // Add this district's turnout to running total
      totalVoterTurnout:
        (summary.totalVoterTurnout || 0) + getTotalVoterTurnout(precincts),

      // Add this district's precinct count
      precinctCount: (summary.precinctCount || 0) + precincts.length,

      // Calculate new percentage based on updated totals
      averageTurnoutPercentage: Number(
        (
          (((summary.totalVoterTurnout || 0) +
            getTotalVoterTurnout(precincts)) /
            ((summary.totalRegisteredVoters || 0) +
              getTotalRegisteredVoters(precincts))) *
          100
        ).toFixed(2)
      ),
    }),
    // Start with empty object
    {}
  );
}
```

## Using Helper Functions To Clean Up Our Code

Let's look at how our helper functions make the code more readable and maintainable:

```javascript
// Before helper functions:
const districtTotals = district.precincts.reduce(
  (totals, precinct) => ({
    registered: totals.registered + precinct.registeredVoters,
    turnout: totals.turnout + precinct.voterTurnout,
  }),
  { registered: 0, turnout: 0 }
);

totalRegisteredVoters += districtTotals.registered;
totalVoterTurnout += districtTotals.turnout;

// After helper functions:
totalRegisteredVoters += getTotalRegisteredVoters(district.precincts);
totalVoterTurnout += getTotalVoterTurnout(district.precincts);
```

The helper functions:

1. Hide the complexity of the reduce operations
2. Give meaningful names to what we're calculating
3. Make the code read more like plain English
4. Can be tested independently
5. Could be reused for other calculations

## Building the Final Version Step by Step

Let's see how our final solution comes together, piece by piece:

```javascript
// 1. Create our helper functions
function getTotalRegisteredVoters(precincts) {
  return precincts.reduce(
    (total, { registeredVoters }) => total + registeredVoters,
    0
  );
}

function getTotalVoterTurnout(precincts) {
  return precincts.reduce((total, { voterTurnout }) => total + voterTurnout, 0);
}

// 2. Start with basic structure
function generateTurnoutSummary(districts) {
  return districts.reduce((summary, { precincts }) => {
    // We'll add our calculations here
  }, {});
}

// 3. Add registered voters and turnout
function generateTurnoutSummary(districts) {
  return districts.reduce(
    (summary, { precincts }) => ({
      ...summary,
      totalRegisteredVoters:
        (summary.totalRegisteredVoters || 0) +
        getTotalRegisteredVoters(precincts),
      totalVoterTurnout:
        (summary.totalVoterTurnout || 0) + getTotalVoterTurnout(precincts),
      precinctCount: (summary.precinctCount || 0) + precincts.length,
    }),
    {}
  );
}

// 4. Finally, add percentage calculation
function generateTurnoutSummary(districts) {
  return districts.reduce((summary, { precincts }) => {
    // First get new totals
    const newRegistered =
      (summary.totalRegisteredVoters || 0) +
      getTotalRegisteredVoters(precincts);
    const newTurnout =
      (summary.totalVoterTurnout || 0) + getTotalVoterTurnout(precincts);

    // Then build return object with all values
    return {
      ...summary,
      totalRegisteredVoters: newRegistered,
      totalVoterTurnout: newTurnout,
      precinctCount: (summary.precinctCount || 0) + precincts.length,
      averageTurnoutPercentage: Number(
        ((newTurnout / newRegistered) * 100).toFixed(2)
      ),
    };
  }, {});
}
```

## Finding Balance: Readable vs Clever

Notice in our final version, we could make it more concise by calculating everything in the return statement (like we did earlier). But breaking out `newRegistered` and `newTurnout` makes the code:

1. Easier to debug (you can log these values)
2. More readable (clear what each part does)
3. Easier to modify (clear where to make changes)

We could make it even more concise:

```javascript
// Super concise but harder to understand!
const generateTurnoutSummary = (districts) =>
  districts.reduce(
    (s, { precincts }) => ({
      ...s,
      totalRegisteredVoters:
        (s.totalRegisteredVoters || 0) + getTotalRegisteredVoters(precincts),
      totalVoterTurnout:
        (s.totalVoterTurnout || 0) + getTotalVoterTurnout(precincts),
      precinctCount: (s.precinctCount || 0) + precincts.length,
      averageTurnoutPercentage: Number(
        (
          (((s.totalVoterTurnout || 0) + getTotalVoterTurnout(precincts)) /
            ((s.totalRegisteredVoters || 0) +
              getTotalRegisteredVoters(precincts))) *
          100
        ).toFixed(2)
      ),
    }),
    {}
  );
```

But remember: The goal isn't to write the shortest possible code, it's to write code that:

- Other developers can understand
- You can understand later
- Can be maintained and modified
- Can be debugged when something goes wrong

## Lessons Learned

1. Start simple and build complexity gradually
2. Extract repeated operations into helper functions
3. Use meaningful variable names
4. Balance conciseness with readability
5. Think about future maintenance
6. Consider debugging needs

The "best" solution isn't always the cleverest or shortest - it's the one that clearly expresses its intent and can be maintained over time.

### Understanding How It Works

1. **The Helper Functions**:

   - Each takes an array of precincts
   - Uses reduce to sum up specific values
   - Makes our main function easier to read
   - Could be reused elsewhere if needed

2. **The Main Reduce Operation**:

   - Starts with an empty object `{}`
   - For each district, spreads existing totals
   - Adds new values from current district
   - Calculates running percentage

3. **Key Concepts Used**:
   - Reduce to build an object
   - Object spread (`...summary`)
   - Destructuring `{ precincts }`
   - || 0 for initial values
   - Helper functions for clarity

Remember: Breaking down complex operations into helper functions makes code:

- Easier to understand
- Easier to maintain
- More reusable
- Self-documenting through function names
