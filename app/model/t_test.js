module.exports = (db,DataTypes) => {
    return db.define(
        'tbl_sort',
        {
            id : {
                primaryKey : true,
                autoIncrement : true,
                type : DataTypes.INTEGER
            },
            sort : DataTypes.STRING,
            un_sort : DataTypes.STRING
        },{
            freezeTableName : true,
            timestamps : false
        }
    )
}