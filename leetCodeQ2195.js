/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSumFasterApproach = function(nums, k) {
    const exist = new Set(nums)
     let sum = (1 + k) * k / 2;
     let nextToAdd = k + 1;
     for (const num of exist) {
         if (num <= k) {
             while(exist.has(nextToAdd)) {
                 nextToAdd++
             }
             // console.log('got', num, 'added', nextToAdd)
             sum = sum - num + nextToAdd
             nextToAdd++
         }
     }
     return sum
 };

var minimalKSum = function(nums, k) {
    let sum = 0 ;
    nums.sort((x,y) => x-y);
    
    for(let i = 0 ; i < nums.length ; i++){
        if(i == 0 && nums[i] > 1){
            let rest = k - (nums[i] - 1);
            if(rest > 0){
                sum += calSum(1, nums[i]-1, nums[i] - 1);
            }
            if(rest == 0){
                sum += calSum(1, nums[i]-1, nums[i] - 1);
                return sum;
            }
            if(rest < 0){
                sum += calSum(1, k, k);
                return sum;
            }
            k = rest;
        }

        if(nums[i] - nums[i-1] > 1){
            let rest = k - (nums[i] - nums[i-1]-1);
            if(rest > 0){
                sum += calSum(nums[i-1]+1, nums[i]-1, nums[i] - nums[i-1]-1);
            }
            if(rest == 0){
                sum += calSum(nums[i-1]+1, nums[i]-1, nums[i] - nums[i-1]-1);
                return sum;
            }
            if(rest < 0){
                sum += calSum(nums[i-1]+1, nums[i-1]+k, k);
                return sum;
            }
            k = rest;
        }
    }

    if(k > 0){
        let lastElement = nums[nums.length-1];
        return sum+=calSum(lastElement+1, lastElement+k, k);
    }

    return sum;
};

const calSum = (start, end, length) =>{
    return ((start+end) * length) / 2 ;
}


const nums=[1,4,25,10,25], k = 2;
const nums1=[38453886,61850359,60310062,985492,19815413,4253374,22399172,1754793,47826511,44664099,37958075,95314787,76252671,6366304,88150931,60546584,27475737,
    76845112,88756090,78667461,41220108,40992141,54026582,79692891,63216342,21182126,95810794,29074384,84514974,9027378,45461243,78112270,83931638,64732865,61483815,
    62547761,28124092,8344912,81338987,905302,1244056,18751343,46261292,85676072,14046816,6688914,98148945,27644103,47554012,35991461,94097833,82525990,
    44410756,41114276,79719758,6373103,36734231,3833338,46853252,64141633,85400071,33567163,33776091,68923370,92808512,85768434,35799846,77606421,43836286,
    94597864,87120855,89855358,98519170,65115043,17647144,25239629,98699179,81313621,51987015,94390467,55755865,66895241,99606830,12048058,20203330,96397760,
    45029782,85240818,25038466,54472506,618943,60639321,65398889,26912366,78741558,23154784,15434592,30365998,30948530,7438269,98329546,17292722,64570829,
    47101139,99607271,99281526,7881845], k1= 93092531;
const nums2 =[5,6], k2 = 6;
console.log(minimalKSum(nums1,k1));