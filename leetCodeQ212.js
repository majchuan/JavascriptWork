/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(board, words) {
    const trieNode = BuildTries(words);
    const output = new Set();
    for(let i =0 ; i < board.length; i++){
        for(let j =0 ; j < board[0].length; j++){
            checkWords(board,trieNode,i,j,output);
        }
    }
    return [...output];
    
};

const checkWords = (board, trieNode, start, end, output)=>{
    const m = board.length;
    const n = board[0].length;

    if(trieNode.word){
        output.add(trieNode.word);
        trieNode.word = null ;
    }
 
    if(start >= m || start < 0 || end >= n || end < 0){
        return;
    }
    
    try {
        if(board[start][end]=="*" || trieNode[board[start][end]] == null){
            return;
        }
    } catch (error) {
        console.log(error);
    }

    let temp = board[start][end];
    board[start][end] = "*";
    trieNode = trieNode[temp]

    checkWords(board, trieNode,start-1, end,  output);
    checkWords(board, trieNode,start, end+1,  output);
    checkWords(board, trieNode,start+1, end,  output);
    checkWords(board, trieNode,start, end-1,  output);
    board[start][end] = temp;
    
    
    return;
} 

/*
*Tries 
*/
class TrieNode{
    constructor(){
        this.word = null ;
        this.key = "";
    }
}

function BuildTries(words){
    let root = new TrieNode();

    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        let node = root;
        
        for(let j = 0; j < word.length; j++) {
            let ch = word[j];
            
            if(!node[ch]){ 
                node[ch] = new TrieNode();
            }
            node = node[ch];
        }
        
        node.word = word;
    }

    return root;
}


const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"];
const board1 = [["a"]], words1 =["a"];
const board2 =[["o","a","b","n"],["o","t","a","e"],["a","h","k","r"],["a","f","l","v"]], words2 =["oa","oaa"];
const board3 =[["a","a"]], words3 = ["aa"];
const board4 = [["a","b","c"],["a","e","d"],["a","f","g"]],words4 = ["abcdefg","gfedcbaaa","eaabcdgfa","befa","dgc","ade"]
const board5=[["a","a","a","a","a","a","a","a","a","a","a","a"],
["a","a","a","a","a","a","a","a","a","a","a","a"],
["a","a","a","a","a","a","a","a","a","a","a","a"],
["a","a","a","a","a","a","a","a","a","a","a","a"],
["a","a","a","a","a","a","a","a","a","a","a","a"],
["a","a","a","a","a","a","a","a","a","a","a","a"],
["a","a","a","a","a","a","a","a","a","a","a","a"],
["a","a","a","a","a","a","a","a","a","a","a","a"],
["a","a","a","a","a","a","a","a","a","a","a","a"],
["a","a","a","a","a","a","a","a","a","a","a","a"],
["a","a","a","a","a","a","a","a","a","a","a","a"],
["a","a","a","a","a","a","a","a","a","a","a","a"]], words5=["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"];

const board6 = [["b","a","b","a","b","a","b","a","b","a"],
["a","b","a","b","a","b","a","b","a","b"],
["b","a","b","a","b","a","b","a","b","a"],
["a","b","a","b","a","b","a","b","a","b"],
["b","a","b","a","b","a","b","a","b","a"],
["a","b","a","b","a","b","a","b","a","b"],
["b","a","b","a","b","a","b","a","b","a"],
["a","b","a","b","a","b","a","b","a","b"],
["b","a","b","a","b","a","b","a","b","a"],
["a","b","a","b","a","b","a","b","a","b"]] ,
words6 = ["ababababaa","ababababab","ababababac","ababababad","ababababae","ababababaf","ababababag","ababababah","ababababai","ababababaj","ababababak",
"ababababal","ababababam","ababababan","ababababao","ababababap","ababababaq","ababababar","ababababas","ababababat","ababababau","ababababav",
"ababababaw","ababababax","ababababay","ababababaz","ababababba","ababababbb","ababababbc","ababababbd","ababababbe","ababababbf","ababababbg",
"ababababbh","ababababbi","ababababbj","ababababbk","ababababbl","ababababbm","ababababbn","ababababbo","ababababbp","ababababbq","ababababbr",
"ababababbs","ababababbt","ababababbu","ababababbv","ababababbw","ababababbx","ababababby","ababababbz","ababababca","ababababcb","ababababcc",
"ababababcd","ababababce","ababababcf","ababababcg","ababababch","ababababci","ababababcj","ababababck","ababababcl","ababababcm","ababababcn",
"ababababco","ababababcp","ababababcq","ababababcr","ababababcs","ababababct","ababababcu","ababababcv","ababababcw","ababababcx","ababababcy",
"ababababcz","ababababda","ababababdb","ababababdc","ababababdd","ababababde","ababababdf","ababababdg","ababababdh","ababababdi","ababababdj",
"ababababdk","ababababdl","ababababdm","ababababdn","ababababdo","ababababdp","ababababdq","ababababdr","ababababds","ababababdt","ababababdu",
"ababababdv","ababababdw","ababababdx","ababababdy","ababababdz","ababababea","ababababeb","ababababec","ababababed","ababababee","ababababef",
"ababababeg","ababababeh","ababababei","ababababej","ababababek","ababababel","ababababem","ababababen","ababababeo","ababababep","ababababeq",
"ababababer","ababababes","ababababet","ababababeu","ababababev","ababababew","ababababex","ababababey","ababababez","ababababfa","ababababfb",
"ababababfc","ababababfd","ababababfe","ababababff","ababababfg","ababababfh","ababababfi","ababababfj","ababababfk","ababababfl","ababababfm",
"ababababfn","ababababfo","ababababfp","ababababfq","ababababfr","ababababfs","ababababft","ababababfu","ababababfv","ababababfw","ababababfx",
"ababababfy","ababababfz","ababababga","ababababgb","ababababgc","ababababgd","ababababge","ababababgf","ababababgg","ababababgh","ababababgi",
"ababababgj","ababababgk","ababababgl","ababababgm","ababababgn","ababababgo","ababababgp","ababababgq","ababababgr","ababababgs","ababababgt",
"ababababgu","ababababgv","ababababgw","ababababgx","ababababgy","ababababgz","ababababha","ababababhb","ababababhc","ababababhd","ababababhe",
"ababababhf","ababababhg","ababababhh","ababababhi","ababababhj","ababababhk","ababababhl","ababababhm","ababababhn","ababababho","ababababhp",
"ababababhq","ababababhr","ababababhs","ababababht","ababababhu","ababababhv","ababababhw","ababababhx","ababababhy","ababababhz","ababababia",
"ababababib","ababababic","ababababid","ababababie","ababababif","ababababig","ababababih","ababababii","ababababij","ababababik","ababababil",
"ababababim","ababababin","ababababio","ababababip","ababababiq","ababababir","ababababis","ababababit","ababababiu","ababababiv","ababababiw",
"ababababix","ababababiy","ababababiz","ababababja","ababababjb","ababababjc","ababababjd","ababababje","ababababjf","ababababjg","ababababjh",
"ababababji","ababababjj","ababababjk","ababababjl","ababababjm","ababababjn","ababababjo","ababababjp","ababababjq","ababababjr","ababababjs",
"ababababjt","ababababju","ababababjv","ababababjw","ababababjx","ababababjy","ababababjz","ababababka","ababababkb","ababababkc","ababababkd",
"ababababke","ababababkf","ababababkg","ababababkh","ababababki","ababababkj","ababababkk","ababababkl","ababababkm","ababababkn","ababababko",
"ababababkp","ababababkq","ababababkr","ababababks","ababababkt","ababababku","ababababkv","ababababkw","ababababkx","ababababky","ababababkz",
"ababababla","abababablb","abababablc","ababababld","abababable","abababablf","abababablg","abababablh","ababababli","abababablj","abababablk",
"ababababll","abababablm","ababababln","abababablo","abababablp","abababablq","abababablr","ababababls","abababablt","abababablu","abababablv",
"abababablw","abababablx","abababably","abababablz","ababababma","ababababmb","ababababmc","ababababmd","ababababme","ababababmf","ababababmg",
"ababababmh","ababababmi","ababababmj","ababababmk","ababababml","ababababmm","ababababmn","ababababmo","ababababmp","ababababmq","ababababmr",
"ababababms","ababababmt","ababababmu","ababababmv","ababababmw","ababababmx","ababababmy","ababababmz","ababababna","ababababnb","ababababnc",
"ababababnd","ababababne","ababababnf","ababababng","ababababnh","ababababni","ababababnj","ababababnk","ababababnl","ababababnm","ababababnn",
"ababababno","ababababnp","ababababnq","ababababnr","ababababns","ababababnt","ababababnu","ababababnv","ababababnw","ababababnx","ababababny",
"ababababnz","ababababoa","ababababob","ababababoc","ababababod","ababababoe","ababababof","ababababog","ababababoh","ababababoi","ababababoj",
"ababababok","ababababol","ababababom","ababababon","ababababoo","ababababop","ababababoq","ababababor","ababababos","ababababot","ababababou",
"ababababov","ababababow","ababababox","ababababoy","ababababoz","ababababpa","ababababpb","ababababpc","ababababpd","ababababpe","ababababpf",
"ababababpg","ababababph","ababababpi","ababababpj","ababababpk","ababababpl","ababababpm","ababababpn","ababababpo","ababababpp","ababababpq",
"ababababpr","ababababps","ababababpt","ababababpu","ababababpv","ababababpw","ababababpx","ababababpy","ababababpz","ababababqa","ababababqb",
"ababababqc","ababababqd","ababababqe","ababababqf","ababababqg","ababababqh","ababababqi","ababababqj","ababababqk","ababababql","ababababqm",
"ababababqn","ababababqo","ababababqp","ababababqq","ababababqr","ababababqs","ababababqt","ababababqu","ababababqv","ababababqw","ababababqx",
"ababababqy","ababababqz","ababababra","ababababrb","ababababrc","ababababrd","ababababre","ababababrf","ababababrg","ababababrh","ababababri",
"ababababrj","ababababrk","ababababrl","ababababrm","ababababrn","ababababro","ababababrp","ababababrq","ababababrr","ababababrs","ababababrt",
"ababababru","ababababrv","ababababrw","ababababrx","ababababry","ababababrz","ababababsa","ababababsb","ababababsc","ababababsd","ababababse",
"ababababsf","ababababsg","ababababsh","ababababsi","ababababsj","ababababsk","ababababsl","ababababsm","ababababsn","ababababso","ababababsp",
"ababababsq","ababababsr","ababababss","ababababst","ababababsu","ababababsv","ababababsw","ababababsx","ababababsy","ababababsz","ababababta",
"ababababtb","ababababtc","ababababtd","ababababte","ababababtf","ababababtg","ababababth","ababababti","ababababtj","ababababtk","ababababtl",
"ababababtm","ababababtn","ababababto","ababababtp","ababababtq","ababababtr","ababababts","ababababtt","ababababtu","ababababtv","ababababtw",
"ababababtx","ababababty","ababababtz","ababababua","ababababub","ababababuc","ababababud","ababababue","ababababuf","ababababug","ababababuh",
"ababababui","ababababuj","ababababuk","ababababul","ababababum","ababababun","ababababuo","ababababup","ababababuq","ababababur","ababababus",
"ababababut","ababababuu","ababababuv","ababababuw","ababababux","ababababuy","ababababuz","ababababva","ababababvb","ababababvc","ababababvd",
"ababababve","ababababvf","ababababvg","ababababvh","ababababvi","ababababvj","ababababvk","ababababvl","ababababvm","ababababvn","ababababvo",
"ababababvp","ababababvq","ababababvr","ababababvs","ababababvt","ababababvu","ababababvv","ababababvw","ababababvx","ababababvy","ababababvz",
"ababababwa","ababababwb","ababababwc","ababababwd","ababababwe","ababababwf","ababababwg","ababababwh","ababababwi","ababababwj","ababababwk",
"ababababwl","ababababwm","ababababwn","ababababwo","ababababwp","ababababwq","ababababwr","ababababws","ababababwt","ababababwu","ababababwv",
"ababababww","ababababwx","ababababwy","ababababwz","ababababxa","ababababxb","ababababxc","ababababxd","ababababxe","ababababxf","ababababxg",
"ababababxh","ababababxi","ababababxj","ababababxk","ababababxl","ababababxm","ababababxn","ababababxo","ababababxp","ababababxq","ababababxr",
"ababababxs","ababababxt","ababababxu","ababababxv","ababababxw","ababababxx","ababababxy","ababababxz","ababababya","ababababyb","ababababyc",
"ababababyd","ababababye","ababababyf","ababababyg","ababababyh","ababababyi","ababababyj","ababababyk","ababababyl","ababababym","ababababyn",
"ababababyo","ababababyp","ababababyq","ababababyr","ababababys","ababababyt","ababababyu","ababababyv","ababababyw","ababababyx","ababababyy",
"ababababyz","ababababza","ababababzb","ababababzc","ababababzd","ababababze","ababababzf","ababababzg","ababababzh","ababababzi","ababababzj",
"ababababzk","ababababzl","ababababzm","ababababzn","ababababzo","ababababzp","ababababzq","ababababzr","ababababzs","ababababzt","ababababzu",
"ababababzv","ababababzw","ababababzx","ababababzy","ababababzz"];

console.log(findWords(board,words));


