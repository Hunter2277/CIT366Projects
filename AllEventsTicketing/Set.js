function Set() {


    this.intersection = function (listA, listB) {

        var resultList = [];

        if (listA === null || listB === null) {
            return null;
        }

        for (var i = 0; i < listA.length; i++) {
            var nextValue = listA[i];

            for (var j = 0; j < listB.length; j++) {
                if (listB[j] === nextValue) {
                    resultList.push(listB[j]);
                    break;
                }
            }
        }
        return resultList;
    }




     this.union = function(listA, listB) {

     var resultList = [];
     if(listA === null || listB === null){
        return null;
     }
     var r1 = this.symmetricDifference(listA,listB);
         for(var i =0; i < r1.length; i++){
         resultList.push(r1[i]);
         }
         var r2 = this.intersection(listA,listB);
        for(var j = 0; j < r2.length; j++){
             resultList.push(r2[j]);
        }

     return resultList;
     }


    this.relativeComplement = function (listA, listB) {

        var resultList = [];

        if (listA === null || listB === null) {
            return null;
        }

        for (var i = 0; i < listA.length; i++) {
            var nextValue = listA[i];

            for (var j = 0; j < listB.length; j++) {
                if (listB[j] === nextValue) {
                    break;
                }
            }
            if (listB[j] !== nextValue) {
                resultList.push(listA[i]);
            }
        }

        return resultList;
    }



    this.symmetricDifference = function (listA, listB) {
        var resultList = [];

        if (listA === null || listB === null) {
            return null;
        }


        var r1 = this.relativeComplement(listA, listB);

        for (var i = 0; i < r1.length; i++) {
            resultList.push(r1[i]);
        }


        var r2 = this.relativeComplement(listB, listA);

        for (var j = 0; j < r2.length; j++) {
            resultList.push(r2[j]);
        }

        return resultList;
    }

}










	


