# JavaScript File

1. readFile(fileName, [encoding], [callback])
    ------------
    - 비동기식 I / O 로 파일을 읽어들인다.
    
2. readFileSync(fileName, [encoding])
    -----------------
    - 동기식 I / O 로 파일을 읽어들인다.
    
3. writeFile(fileName, data, encoding='utf8', [callback])
    ------------
    - 비동기식 I / O 로 파일을 쓴다.

4. writeFileSync(fileName, data, encoding='utf8')
    -------------
    - 동기식 I / O 로 파일을 쓴다.
    
    
#### 각각의 메서드의 차이는 Callback의 유무로 봐도 될 것 같다.


## File open, read, write, close
1. open(path, flags, [mode], [callback])
    ----
    - 파일 열기
    
2. read(fd, buffer, offset, length, position, [callback])
    ----
    - 지정한 부분의 파일을 읽는다.
    
3. write(fd, buffer, offset, length, position, [callback])
    ----
    - 파일의 지정한 부분에 데이터를 쓴다.

4. close(fd, [callback])
    ----
    - 파일을 닫아준다.