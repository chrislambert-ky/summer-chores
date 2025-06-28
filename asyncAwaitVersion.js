// Summer Chores Async/Await Version

function mowYard(name)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {console.log(`${name} mowed the yard.`);resolve();}, 1000);
    });
}

function weedEat(name)
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            if (Math.random() < 0.25)
            {console.log(`${name} fell asleep and failed to get things done.`);reject();}
            else
            {console.log(`${name} finished using the weed eater.`);resolve();}
        }, 1000);
    });
}

function trimHedges(name)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {console.log(`${name} finished trimming the hedges.`);resolve();}, 1000);
    });
}

async function doSummerChores(name)
{
    try
    {
        await mowYard(name);
        await weedEat(name);
        await trimHedges(name);
        console.log(`${name} finished all their chores!`);
    }
    catch
    {
        console.log(`${name} did not finish all their chores.`);
    }
}

doSummerChores("Chris");