
if(global.Buffer) module.exports = function(data){
  if(!(data instanceof Buffer)) data = new Buffer(data);
  return data.toString('utf8');
};
else if(global.TextDecoder) module.exports = function(data){
  if(!data.BYTES_PER_ELEMENT) data = new Uint8Array(data);
  return (new TextDecoder('utf-8')).decode(data);
};
else module.exports = function(bytes){
  var ret = '',
      i,
      code,
      next;

  if(!bytes.BYTES_PER_ELEMENT) bytes = new Uint8Array(bytes);

  for(i = 0;i < bytes.length;i++){

    if(bytes[i] < 128){
      ret += String.fromCharCode(bytes[i]);
      continue;
    }

    if(bytes[i] < 224){
      code = (bytes[i] & 0x3f) << 6;
      next = i + 1;
    }else if(bytes[i] < 240){
      code = (bytes[i] & 0x1f) << 12;
      next = i + 2;
    }else if(bytes[i] < 248){
      code = (bytes[i] & 0x0f) << 18;
      next = i + 3;
    }else if(bytes[i] < 252){
      code = (bytes[i] & 0x07) << 24;
      next = i + 4;
    }else{
      code = (bytes[i] & 0x03) << 30;
      next = i + 5;
    }

    do{
      i++;
      code |= (bytes[i] & 0x7f) << ((next - i) * 6);
    }while(i != next);

    ret += String.fromCharCode(code);
  }

  return ret;
};
