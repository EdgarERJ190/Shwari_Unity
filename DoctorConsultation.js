const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const chatBox = document.getElementById('chatBox');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendButton');
const progressContainer = document.getElementById('progressContainer');

const muteButton = document.getElementById('muteButton');
const videoButton = document.getElementById('videoButton');
const endCallButton = document.getElementById('endCallButton');

// Mock doctor and appointment details
document.getElementById('doctorName').textContent = "Dr. Jane Doe";
document.getElementById('appointmentTime').textContent = "10:00 AM";

// Add some mock treatment progress
const progressData = [
    "Diagnosis: Hypertension - 01/01/2024",
    "Medication Prescribed: Amlodipine - 02/01/2024",
    "Follow-up Check: Blood Pressure Normal - 03/01/2024"
];
progressData.forEach(progress => {
    const div = document.createElement('div');
    div.textContent = progress;
    progressContainer.appendChild(div);
});

// WebRTC setup
const peerConnection = new RTCPeerConnection();
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        localVideo.srcObject = stream;
        stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
    });

peerConnection.ontrack = event => {
    remoteVideo.srcObject = event.streams[0];
};

// Mock signaling server
function sendSignal(data) {
    // Implement signaling server communication
}

peerConnection.onicecandidate = event => {
    if (event.candidate) {
        sendSignal({ candidate: event.candidate });
    }
};

peerConnection.ondatachannel = event => {
    const receiveChannel = event.channel;
    receiveChannel.onmessage = event => {
        const message = document.createElement('div');
        message.textContent = event.data;
        chatBox.appendChild(message);
    };
};

const dataChannel = peerConnection.createDataChannel("chat");

sendButton.addEventListener('click', () => {
    const message = chatInput.value;
    dataChannel.send(message);
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatInput.value = '';
});

// Handle mute/unmute
let isMuted = false;
muteButton.addEventListener('click', () => {
    isMuted = !isMuted;
    localVideo.srcObject.getAudioTracks().forEach(track => track.enabled = !isMuted);
    muteButton.innerHTML = isMuted ? '<i class="fas fa-microphone-slash"></i>' : '<i class="fas fa-microphone"></i>';
});

// Handle video on/off
let isVideoOff = false;
videoButton.addEventListener('click', () => {
    isVideoOff = !isVideoOff;
    localVideo.srcObject.getVideoTracks().forEach(track => track.enabled = !isVideoOff);
    videoButton.innerHTML = isVideoOff ? '<i class="fas fa-video-slash"></i>' : '<i class="fas fa-video"></i>';
});

// Handle end call
endCallButton.addEventListener('click', () => {
    peerConnection.close();
    localVideo.srcObject.getTracks().forEach(track => track.stop());
    remoteVideo.srcObject = null;
    window.location.reload(); // Reload the page for simplicity
});
