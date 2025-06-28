# Summer Chores

Code:You Summer Chores Project

## Overview

This project will demonstrate three different techniques for scheduling tasks.  This project simulates a Saturday routine where someone must complete a list of summer chores in a specific order. 

## Chore Routine

The chores must be completed in the following order:

1. Mow the yard
2. Weedeat the edges of the house and fence line
3. Trim the hedges
4. Collect fallen wood for summer night fires
5. Water the garden

As they progress, they get more tired and may fall asleep before finishing all their tasks.  If the person gets too tired, they may fall asleep and not finish all the chores. However, they will always complete mowing the yard before possibly falling asleep.  To accomplish this, I will be entering a **25%** change after every task that the person falls asleep and messes up their schedule.

## Chore Timings

Each chore takes a set amount of time (in milliseconds):

| Chore                | Time (ms) |
|----------------------|-----------|
| Mow the yard         | 2000      |
| Weedeat the yard     | 1500      |
| Trim the hedges      | 1000      |
| Collect wood         | 2500      |
| Water the garden     | 500       |

## Versions

There will be three version of this project, each using different techniques:
- [Callback Summer Chores](/callbackVersion.js)
- [Promises Summer Chores](/promiseVersion.js)
- [Async/Await Summer Chores](/asyncAwaitVersion.js)