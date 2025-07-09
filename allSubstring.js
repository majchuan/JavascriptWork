/*
public class recursive {

    static String in = "1234";

    public static void main(String[] args) {
        substrings(0,1);
    }

    static void substrings(int start, int end){
        if(start == in.length() && end == in.length()){
            return;
        }else{
            if(end == in.length()+1){
                substrings(start+1,start+1);
            }else{
                System.out.println(in.substring(start, end));
                substrings(start, end+1);
            }
        }
    }

}
*/

const recursiveAllSubstring =(s,start, end) =>{
    if(start == s.length && end == s.length){
        return ;
    }else{
        if(end == s.length +1){
            recursiveAllSubstring(s,start+1,start+1);
        }else{
            console.log(s.substring(start,end));
            recursiveAllSubstring(s,start,end+1);
        }
    }
}

console.log(recursiveAllSubstring("abc",0,1));