//라이브러리
//import (라이브러리 이름); -> (이름)을 가져다가 쓸 것이다.
//import *(모든 것) from 'three' -> three라는 라이브러리에서 모든 것을 가져올 거에요.
//as (별명) : three라는 라이브러리로부터 모든 기능을 가져와 쓰겠다.
//이 라이브러리 안의 기능은 내가 THREE라고 부를게!
import * as THREE from 'three';

//라이브러리의 기능을 가져다 쓰기.
//장면=  새로운 THREE.장면;
//객체지향 -> 붕어빵 굽기, 하나의 공통된 것을 만드는 것을 객체 지행이라고 한다. 
const scene = new ThreeMFLoader.Scene();
scene.background = new THREE.Color(0xf0f0f0);
//매개변수!!

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.lookAt(0, 2, 0);

window.addEventListenertion('pointerdown', (event) => { 
    MouseEvent.X = (event.clientX / window.innerWidth) * 2 -1;
    MouseEvent.Y = (event.clientY / window.innerHeight) * 2 +1;

    Raycaster.setFormCamera(MouseEvent, camera);
    const intersects = THREE.Raycaster.intersectsObject(ball);

    if (intersects,length > 0){
        isDragging = true;
        velocity = 0;

        const normal =new THREE.Vector3();
        camera.getWorldDirection(normal);
        dragPlane.setFormNormalAndCoplanarPoint(normal.negate(), ball.position);
    }
});