import db from "./db";

async function loadFixtures(clearData = false) {
    if(clearData){
        console.warn('clearing data')
        await db('category').del()
        await db('book').del()
    }
    
    await db.batchInsert('category',[
        {id: 1,title : 'Drama'},
        {id: 2,title : 'Programming'}
    ])
    
    await db.batchInsert('book',[
        {id: 1,title: 'Titanic',price: 180,stock_amount: 10,category_id:1},
        {id: 2,title: 'The green mile',price: 420,stock_amount: 6,category_id:1},
        {id: 3,title: 'Day this day 365',price: 1300,stock_amount: 3,category_id:2}
    ])
}

export default loadFixtures