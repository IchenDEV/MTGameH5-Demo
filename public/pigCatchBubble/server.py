import asyncio
import websockets
#猪的id
p_id = 1
#泡泡的id
b_id = 101
#猪列表
pList = []
#气泡列表
bList = []
pig = [-999,-999]
bubble = [-999,-999]
# 接收客户端消息并处理，这里只是简单把客户端发来的返回回去
async def waitteam(websocket):
    t1 = False
    t2 = False
    while True:
        recv_text = await websocket.recv()
        if recv_text == "1":
            t1 = True
        else: 
            t2 = True
        if t1 == True & t2 == True:
            await websocket.send("111")
USERS = list()
async def register(websocket):
    for i in range(len(USERS)):
        if USERS[i]==websocket:
            return
    USERS.append(websocket)
async def unregister(websocket):
    USERS.remove(websocket)
async def recv_msg(websocket):
    await register(websocket)
    try:
        async for recv_text in websocket:
            if len(USERS)!=2:
                continue
            if recv_text == "begin" and len(USERS)==2 :
                await USERS[0].send("begin")
                await USERS[1].send("begin")
                continue
            text = recv_text.split(',')
            x = float(text[1])
            y = float(text[2])
            if text[0] == "p" :
                pig[0] = x
                pig[1] = y
                if bubble[0]!=-999 :
                    await websocket.send(str(bubble[0])+','+str(bubble[1]))
            else:
                bubble[0] = x
                bubble[1] = y
                if pig[0]!=-999 :
                    await websocket.send(str(pig[0])+','+str(pig[1]))
            if bom(bubble[0]+25,bubble[1]+25,pig[0]+75,pig[1]+75):
                await USERS[0].send("bom")
                await USERS[1].send("bom")
                await USERS[len(USERS)-1].close()
                await USERS[len(USERS)-1].close()
    finally:
        await unregister(websocket)



# 碰撞检测              
def bom(x1,y1,x2,y2):
    deltax = x1 - x2
    deltay = y1 - y2
    minX = min(deltax, 75)
    maxX = max(minX, -75)
    minY = min(deltay, 75)
    maxY = max(minY, -75)
    if (maxX - deltax) * (maxX - deltax) + (maxY - deltay) * (maxY - deltay) <= 25 * 25 :   
       return True  
    else: 
        return False 


# 服务器端主逻辑
async def main_logic(websocket, path):
  #  await waitteam(websocket)
    await recv_msg(websocket)

start_server = websockets.serve(main_logic, '0.0.0.0', 50050)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
