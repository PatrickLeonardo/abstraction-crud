"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _crud = require('./crud'); var _crud2 = _interopRequireDefault(_crud);

function validation(){
    if (/INSERT/.test(_crud2.default)){
        return 'post'
    }
    else if (/SELECT/.test(_crud2.default)){
        return 'get'
    }
    else if (/UPDATE/.test(_crud2.default)){
        return 'put'
    }
    else if (/DELETE/.test(_crud2.default)){
        return 'delete'
    }
    else{
        return 'exit'
    }
}

exports. default = validation()