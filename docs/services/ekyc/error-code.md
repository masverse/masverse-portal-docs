---
sidebar_position: 5
---

# e-KYC error code 
## OCR Error code

| Error Code            | Description                  |
| :-------------------: | :--------------------------: |
| 9101                | Alarm for covered certificate                         | 
| 9102                |  Alarm for photocopied certificate                         | 
| 9103                |  Alarm for photographed certificate                         | 
| 9104                | Alarm for PS certificate                         | 
| 9107                | Alarm for reflective certificate                         | 
| 9108                | Alarm for blurry image                         | 

## Face Error code

| Error Code                          | Description                                                                 |
| :---------------------------------: | :-------------------------------------------------------------------------: |
| AuthFailure.InvalidAuthorization    | CAM signature/authentication error.                                         |
| FailedOperation.ActionCloseEye      | No motions of eye closing are detected.                                     |
| FailedOperation.ActionFaceClose     | The face is too close to the screen.                                        |
| FailedOperation.ActionFaceFar       | The face is too far from the screen.                                        |
| FailedOperation.ActionFaceLeft      | The face is too far left from the screen.                                   |
| FailedOperation.ActionFaceRight     | The face is too far right from the screen.                                  |
| FailedOperation.ActionFirstAction   | No movement is detected.                                                    |
| FailedOperation.ActionLightDark     | The lighting is too dim.                                                    |
| FailedOperation.ActionLightStrong   | The lighting is too strong.                                                 |
| FailedOperation.ActionNodetectFace  | Failed to detect a full face.                                               |
| FailedOperation.ActionOpenMouth     | No motions of mouth opening are detected.                                   |
| FailedOperation.CompareFail         | Comparison failed.                                                          |
| FailedOperation.CompareLowSimilarity| The comparison similarity did not reach the passing standard.               |
| FailedOperation.CompareSystemError  | Error calling the comparison engine API.                                    |
| FailedOperation.DownLoadError       | File download failed.                                                       |
| FailedOperation.DownLoadTimeoutError| File download timed out.                                                    |
| FailedOperation.LifePhotoDetectFaces| Multiple faces are detected.                                                |
| FailedOperation.LifePhotoDetectFake | Real person comparison failed.                                              |
| FailedOperation.LifePhotoDetectNoFaces| Failed to detect a full face.                                              |
| FailedOperation.LifePhotoPoorQuality| The resolution of the image passed in is too low. Please upload a new one.  |
| FailedOperation.LifePhotoSizeError  | The image passed in is too large or too small.                              |
| FailedOperation.LipFaceIncomplete   | The face is not fully exposed.                                              |
| FailedOperation.LipMoveSmall        | The lip movement range is too small.                                        |
| FailedOperation.LipNetFailed        | Failed to pull the video. Please try again.                                 |
| FailedOperation.LipSizeError        | The video is empty or its size is inappropriate. The recording duration should be about 6 seconds. |
| FailedOperation.LipVideoInvalid     | The video format is incorrect.                                              |
| FailedOperation.LipVideoQuaility    | The video definition is too low.                                            |
| FailedOperation.LipVoiceDetect      | No sound is detected.                                                       |
| FailedOperation.LipVoiceLow         | The volume of the video is too low.                                         |
| FailedOperation.LipVoiceRecognize   | Speech recognition failed.                                                  |
| FailedOperation.LivessBestFrameError| Face detection failed. Unable to extract the photo for comparison.          |
| FailedOperation.LivessDetectFail    | Liveness detection failed.                                                  |
| FailedOperation.LivessDetectFake    | Suspected spoofed recording.                                                |
| FailedOperation.LivessSystemError   | Error calling the liveness engine API.                                      |
| FailedOperation.LivessUnknownError  | Video-based real person detection failed.                                   |
| FailedOperation.SilentDetectFail    | Real person detection failed.                                               |
| FailedOperation.SilentEyeLiveFail   | Eye detection failed.                                                       |
| FailedOperation.SilentFaceDetectFail| No face is detected in the video.                                           |
| FailedOperation.SilentFaceQualityFail| Low face quality.                                                          |
| FailedOperation.SilentFaceWithMaskFail| A face mask is detected.                                                  |
| FailedOperation.SilentMouthLiveFail | Mouth detection failed.                                                     |
| FailedOperation.SilentMultiFaceFail | Multiple faces are detected in the video.                                   |
| FailedOperation.SilentPictureLiveFail| The video might be spoofed.                                                |
| FailedOperation.SilentThreshold     | Real person detection did not reach the passing standard.                   |
| FailedOperation.UnKnown             | Unknown internal error.                                                     |
| InvalidParameter                    | Invalid parameter.                                                          |
| InvalidParameterValue               | Incorrect parameter value.                                                  |
| UnsupportedOperation                | Unsupported operation.                                                      |


 