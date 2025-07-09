/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
    const versions1 = version1.split(".");
    const versions2 = version2.split(".");
    //console.log(versions1, versions2);
    
    let v1Left = 0;
    let v2Left = 0;
    let compareVersion = 0;
    while(v1Left < versions1.length && v2Left < versions2.length){
        if(parseInt(versions1[v1Left]) < parseInt(versions2[v2Left])){
            compareVersion =  -1;
            break;
        }else if(parseInt(versions1[v1Left]) > parseInt(versions2[v2Left])) {
            compareVersion = 1 ;
            break;
        }
        v1Left++;
        v2Left++;
    }
    
    if(compareVersion == 0){
        while(v1Left < versions1.length){
            if(parseInt(versions1[v1Left]) > 0){
                compareVersion = 1;
                break;
            }
            v1Left++;
        }
        
        while(v2Left < versions2.length){
            if(parseInt(versions2[v2Left]) > 0){
                compareVersion = -1;
                break;
            }
            v2Left++;
        }
        
        return compareVersion;
    }else{
        return compareVersion;
    }
};

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersionFasterFunction = function(version1, version2) {
    const nums1 = version1.split('.').map( n => parseInt(n) );
    const nums2 = version2.split('.').map( n => parseInt(n) );

    while(nums1.length > 0 && nums2.length > 0) {
        const num1 = nums1.shift();
        const num2 = nums2.shift();
        if(num1 == num2) continue;
        if(num1 < num2) return -1;
        else return 1;
    }

    while(nums1.length > 0) {
        const num = nums1.shift();
        if(num == 0) continue;
        return 1;
    }

    while(nums2.length > 0) {
        const num = nums2.shift();
        if(num == 0) continue;
        return -1;
    }

    return 0;
};

const version1 = "1.01", version2 = "1.001";
console.log(compareVersion(version1,version2));