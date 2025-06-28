// Summer Chores Callback Version

function mowYard(name, callback) 
{
    setTimeout(() => 
        {console.log(`${name} mowed the yard.`);callback();}, 2000);
}

function weedEat(name, callback) 
{
    setTimeout(() => 
        {
        if (Math.random() < 0.25) 
            {console.log(`${name} fell asleep and failed to get things done.`);} 
        else 
            {console.log(`${name} finished using the weed eater.`);callback();}
        }, 1500);
}

function trimHedges(name, callback) 
{
    setTimeout(() => 
        {
        if (Math.random() < 0.25) 
            {console.log(`${name} fell asleep and failed to get things done.`);} 
        else 
            {console.log(`${name} finished trimming the hedges.`);callback();}
        }, 1000);
}

function collectWood(name, callback) 
{
    setTimeout(() => 
        {
        if (Math.random() < 0.25) 
            {console.log(`${name} fell asleep and failed to get things done.`);} 
        else 
            {console.log(`${name} finished collecting wood.`);callback();}
        }, 2500);
}

function waterGarden(name, callback) 
{
    setTimeout(() => 
        {
        if (Math.random() < 0.25) 
            {console.log(`${name} fell asleep and failed to get things done.`);} 
        else 
            {console.log(`${name} finished watering the garden.`);callback();}
        }, 500);
}

function doSummerChores(name) 
{
    mowYard(name, () => 
        {weedEat(name, () => 
        {trimHedges(name, () => 
        {collectWood(name, () => 
        {waterGarden(name, () => 
        {console.log(`${name} finished all their chores!`);
        });
        });
        });
        });
        });
}


doSummerChores("Chris");
