
import Unity, { UnityContext } from "react-unity-webgl";
const unityContext = new UnityContext({
  loaderUrl: "/assets/Fly.loader.js",
  dataUrl: "/assets/Fly.data.unityweb",
  frameworkUrl: "/assets/Fly.framework.js.unityweb",
  codeUrl: "/assets/Fly.wasm.unityweb",
});

function Game() {
  return (
    <div>
      <Unity
        style={{
          width: "1155px",
          height:"653.4px",
          justifySelf: "center",
          alignSelf: "center",
        }}
        unityContext={unityContext}
      />
    </div>
  );
}

export default Game;
