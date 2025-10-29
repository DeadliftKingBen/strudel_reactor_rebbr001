import './App.css';
import { stranger_tune } from './tunes';
import AudioControls from './components/audio-control/AudioControls';
import PageHeader from './components/PageHeader';
import TextPreprocessor from './components/TextPreprocesser';
import EditorArea from './components/EditorArea';
import StrudelPlayer from "./components/StrudelPlayer";
import { useState, useRef, useEffect } from "react";

export default function StrudelDemo() {

    let strudelRef = useRef();
    let [strudelCode, setStrudelCode] = useState(stranger_tune);

    // CPM Tempo Edit
    const [cpm, setCpm] = useState(120);
    // Volume (Gain) Edit
    const [volume, setVolume] = useState(0.5);

    function handlePreprocess() {
        const processed = strudelCode.replaceAll("<p1_Radio>", "_");
        setStrudelCode(processed);
    }

    function handlePlay() {
        strudelRef.current?.evaluate();
    }
    function handleStop() {
        strudelRef.current?.stop();
    }
    function handleProcPlay() {
        handlePreprocess();
        strudelRef.current?.evaluate();
    }

    function handleProc() {
        const replace = document.getElementById('flexRadioDefault2').checked ? "_" : "";
        const processed = strudelCode.replaceAll("<p1_Radio>", replace);
        setStrudelCode(processed);

        strudelRef.current?.setCode(processed);
        strudelRef.current?.evaluate();
    }

    // Updates the REPL when changes in the text preprocessor are entered
    // Updates the CPM in the REPL
    useEffect(() => {
        if (strudelRef.current) {
        
        strudelCode = strudelCode.replace(/setcpm\(.*?\)/, `setcpm(${cpm})`)
        strudelCode = strudelCode.replace(/.gain\(.*?\)/, `.gain(${volume})`)        
        strudelRef.current.setCode(strudelCode);

        if (strudelRef.current && strudelRef.current.repl.state.started) {
            strudelRef.current.evaluate();
        }
    }
    }, [strudelCode, cpm, volume]);

    return (
        <div className="container-fluid main-container py-4 px-4">
            <PageHeader />
            <br />
            <div className="row g-4 justify-content-center">
                <div className="col-md-7 col-sm-10">
                    <div className="card h-100">
                        <div className="card-header text-white">
                            Code Preprocessor
                        </div>
                        <div className="card-body d-flex align-items-center justify-content-center">
                            <TextPreprocessor 
                                defaultText={strudelCode} 
                                onchange={e => setStrudelCode(e.target.value)} 
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-sm-10">
                    <div className="card h-100">
                        <div className="card-header text-white">
                            Audio Controls
                        </div>
                        <div className="card-body d-flex align-items-center justify-content-center">
                            <AudioControls
                                handlePlay={handlePlay}
                                handleStop={handleStop}
                                handlePreprocess={handlePreprocess}
                                handleProcPlay={handleProcPlay}
                                cpm={cpm}
                                setCpm={setCpm}
                                volume={volume}
                                setVolume={setVolume}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-7 col-sm-10">
                    <div className="card h-100">
                        <div className="card-header text-white">
                            Strudel Player
                        </div>
                        <div className="card-body">
                            <StrudelPlayer 
                                strudelCode={strudelCode} 
                                strudelRef={strudelRef} 
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-sm-10">
                    <div className="card h-100">
                        <div className="card-header text-white">
                            Editor Area
                        </div>
                        <div className="card-body d-flex align-items-center justify-content-center">
                            <EditorArea onProc={handleProc}/>
                        </div>
                    </div>
                </div>
            </div>
            <canvas id="roll"></canvas>
        </div>
    );
}
