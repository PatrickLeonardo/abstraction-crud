import outpot from "./crud"

function validation(){
    if (/INSERT/.test(outpot)){
        return 'post'
    }
    else if (/SELECT/.test(outpot)){
        return 'get'
    }
    else if (/UPDATE/.test(outpot)){
        return 'put'
    }
    else if (/DELETE/.test(outpot)){
        return 'delete'
    }
    else{
        return 'exit'
    }
}

export default validation()