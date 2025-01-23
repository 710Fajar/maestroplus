loader.load(
    '/models/english-willow-bat.glb',
    function (gltf) {
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5);
        model.position.set(0, -0.5, 0);
        scene.add(model);
    },
    undefined,
    function (error) {
        console.error('Gagal memuat model. Periksa jalur file atau formatnya:', error);
        alert('Gagal memuat model 3D. Cek kembali sumber file.');
    }
);
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Pastikan kontrol diperbarui setiap frame
    renderer.render(scene, camera);
}
console.log('Container width:', container.clientWidth);
console.log('Container height:', container.clientHeight);

