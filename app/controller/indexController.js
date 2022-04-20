const {tTest} = require("../model");

module.exports  = {
    sortData:async(req,res) => {
        try {
            let number = req.body.number;
            let splitNumber = number.split(',');
            for(let i = 0; i < splitNumber.length;i++){
                for(let j = 0; j < (splitNumber.length - i - 1);j++){
                    if(splitNumber[j] > splitNumber[j+1]){
                        let temp =  splitNumber[j];
                        splitNumber[j] = splitNumber[j+1];
                        splitNumber[j+1] = temp
                    }
                }
            }

            let numberSort = ""
            for(let i = 0; i < splitNumber.length; i++){
                if(i != splitNumber.length -1){

                    numberSort+= splitNumber[i]+','
                }else{
                    numberSort+= splitNumber[i]

                }
            }
            await tTest.create({
                sort : numberSort,
                un_sort:number
            })
            res.status(200).json({
                status:'success',
                message : 'successfully sort and add new data.'
            })
        } catch (error) {
            res.status(500).json({
                status:'error',
                message : error.message
            })
        }
    }   
}