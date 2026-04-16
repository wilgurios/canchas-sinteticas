function enviarWhatsApp(cancha) {
    const telefono = "573006650726"; // 👈 REEMPLAZA CON TU NÚMERO (incluye el 57)
    let mensaje = "";

    if (cancha === 'General') {
        mensaje = "Hola! Quisiera más información sobre las canchas.";
    } else {
        mensaje = `Hola! Estoy interesado en reservar la ${cancha}. ¿Tienen disponibilidad?`;
    }

    // Codifica el mensaje para que sea válido en una URL
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, '_blank');
}