import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import banner2 from "../../assets/images/banner2.json";
import "./BackAnimated.css";


const BackAnimated = () => {
  const container = useRef(null); // Crea una referencia al contenedor

  useEffect(() => {
    // Configuración de opciones de Lottie
    const lottieOptions = {
      container: container.current, // Especifica el contenedor
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: banner2,
    };

    // Cargar la animación en el contenedor
    const animation = Lottie.loadAnimation(lottieOptions);

    return () => {
      // Detener la animación y eliminar el contenedor cuando el componente se desmonte
      animation.destroy();
    };
  }, []);

  return <div className="bg-animated" ref={container}></div>;
};

export default BackAnimated;
