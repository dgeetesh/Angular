import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {FormControl, FormBuilder, FormGroup,Validators } from "@angular/forms";
import {CommonService} from '../../services/common.service'
import { HttpEvent, HttpEventType } from '@angular/common/http';
import {ngxLoadingAnimationTypes } from 'ngx-loading';
import { Location } from '@angular/common';
const PrimaryWhite = '#dd0031';
const SecondaryGrey = '#006ddd';


@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.css']
})
export class UploadCsvComponent implements OnInit {
  headers:any[]=["CUSTOM.updateTime","CUSTOM.isPhoto","CUSTOM.isVideo","CUSTOM.hSpeed [m/s]","CUSTOM.distance [m]","CUSTOM.travelled [m]","CUSTOM.hSpeed.running_max [m/s]","CALC.hSpeed [m/s]","CALC.distance [m]","CALC.travelled [m]","CALC.distance.running_max [m]","CALC.height.running_max [m]","OSD.latitude","OSD.longitude","OSD.height [m]","OSD.altitude [m]","OSD.xSpeed [m/s]","OSD.ySpeed [m/s]","OSD.zSpeed [m/s]","OSD.pitch","OSD.roll","OSD.yaw","OSD.flycState","OSD.flycState.RAW","OSD.flycCommand","OSD.flycCommand.RAW","OSD.canIOCWork","OSD.groundOrSky","OSD.isMotorUp","OSD.isSwaveWork","OSD.goHomeStatus","OSD.goHomeStatus.RAW","OSD.isImuPreheated","OSD.isVisionUsed","OSD.voltageWarning","OSD.modeChannel","OSD.isGPSused","OSD.compassError","OSD.waveError","OSD.gpsLevel","OSD.batteryType","OSD.isAcceletorOverRange","OSD.isVibrating","OSD.isBarometerDeadInAir","OSD.isMotorBlocked","OSD.isNotEnoughForce","OSD.isPropellerCatapult","OSD.isGoHomeHeightModified","OSD.isOutOfLimit","OSD.gpsNum","OSD.flightAction","OSD.flightAction.RAW","OSD.motorStartFailedCause","OSD.motorStartFailedCause.RAW","OSD.nonGPSCause","OSD.nonGPSCause.RAW","OSD.isQuickSpin","OSD.battery","OSD.sWaveHeight [m]","OSD.flyTime [s]","OSD.motorRevolution","OSD.flycVersion","OSD.droneType","OSD.imuInitFailReason","OSD.imuInitFailReason.RAW","OSD.motorFailReason","OSD.motorFailReason.RAW","OSD.ctrlDevice","OSD.ctrlDevice.RAW","GIMBAL.pitch","GIMBAL.roll","GIMBAL.yaw","GIMBAL.mode","GIMBAL.mode.RAW","GIMBAL.rollAdjust","GIMBAL.pitchAdjust","GIMBAL.yawAngle","GIMBAL.isAutoCalibration","GIMBAL.autoCalibrationResult","GIMBAL.isPitchInLimit","GIMBAL.isRollInLimit","GIMBAL.isYawInLimit","GIMBAL.isTopPosition","GIMBAL.isStuck","GIMBAL.version","GIMBAL.isSingleClick","GIMBAL.isDoubleClick","GIMBAL.isTripleClick","GIMBAL.timeStamp","RC.aileron","RC.elevator","RC.throttle","RC.rudder","RC.gimbal","RC.goHome","RC.mode","RC.isWheelChanged","RC.wheelOffset","RC.wheelClick","RC.record","RC.shutter","RC.playback","RC.custom1","RC.custom2","RC.bandwidth","CENTER_BATTERY.relativeCapacity","CENTER_BATTERY.currentPV [V]","CENTER_BATTERY.currentCapacity [mAh]","CENTER_BATTERY.fullCapacity [mAh]","CENTER_BATTERY.life","CENTER_BATTERY.loopNum","CENTER_BATTERY.errorType","CENTER_BATTERY.current [A]","CENTER_BATTERY.voltageCell1 [V]","CENTER_BATTERY.voltageCell2 [V]","CENTER_BATTERY.voltageCell3 [V]","CENTER_BATTERY.voltageCell4 [V]","CENTER_BATTERY.voltageCell5 [V]","CENTER_BATTERY.voltageCell6 [V]","CENTER_BATTERY.serialNo","CENTER_BATTERY.productDate","CENTER_BATTERY.temperature [C]","CENTER_BATTERY.connStatus","CENTER_BATTERY.totalStudyCycle","CENTER_BATTERY.lastStudyCycle","CENTER_BATTERY.isNeedStudy","CENTER_BATTERY.isBatteryOnCharge","SMART_BATTERY.usefulTime [s]","SMART_BATTERY.goHomeTime [s]","SMART_BATTERY.landTime [s]","SMART_BATTERY.goHomeBattery","SMART_BATTERY.landBattery","SMART_BATTERY.safeFlyRadius","SMART_BATTERY.volumeConsume","SMART_BATTERY.status","SMART_BATTERY.status.RAW","SMART_BATTERY.goHomeStatus","SMART_BATTERY.goHomeStatus.RAW","SMART_BATTERY.goHomeCountdown","SMART_BATTERY.voltage [V]","SMART_BATTERY.battery","SMART_BATTERY.lowWarning","SMART_BATTERY.lowWarningGoHome","SMART_BATTERY.seriousLowWarning","SMART_BATTERY.seriousLowWarningLanding","SMART_BATTERY.voltagePercent","DEFORM.isDeformProtected","DEFORM.isExceptionState","DEFORM.deformStatus","DEFORM.deformStatus.RAW","DEFORM.deformMode","DEFORM.deformMode.RAW","RC_GPS.startupTime","RC_GPS.latitude","RC_GPS.longitude","RC_GPS.xSpeed [m/s]","RC_GPS.ySpeed [m/s]","RC_GPS.gpsNum","RC_GPS.accuracy","RC_GPS.gpsStatus","CAMERA_INFO.connectState","CAMERA_INFO.usbState","CAMERA_INFO.timeSyncState","CAMERA_INFO.photoState","CAMERA_INFO.recordState","CAMERA_INFO.sensorState","CAMERA_INFO.sdCardInsertState","CAMERA_INFO.sdCardState","CAMERA_INFO.firmUpgradeState","CAMERA_INFO.firmErrorType","CAMERA_INFO.hotState","CAMERA_INFO.enabledPhoto","CAMERA_INFO.isStoring","CAMERA_INFO.isTimePhotoing","CAMERA_INFO.encryptStatus","CAMERA_INFO.mode","CAMERA_INFO.sdCardTotalSize","CAMERA_INFO.sdCardFreeSize","CAMERA_INFO.remainedShots","CAMERA_INFO.remainedTime","CAMERA_INFO.videoRecordTime","CAMERA_INFO.cameraType","CAMERA_INFO.version","MC_PARAM.failSafeAction","MC_PARAM.OAenabled","MC_PARAM.VPSenabled","MC_PARAM.rthOAenabled","HOME.latitude","HOME.longitude","HOME.height [m]","HOME.isHomeRecord","HOME.goHomeMode","HOME.aircraftHeadDirection","HOME.isDynamicHomePointEnabled","HOME.isReachedLimitDistance","HOME.isReachedLimitHeight","HOME.isMultipleModeOpen","HOME.goHomeStatus","HOME.hasGoHome","HOME.compassCeleStatus","HOME.isCompassCeleing","HOME.isBeginnerMode","HOME.isIOCEnabled","HOME.iocMode","HOME.goHomeHeight [m]","HOME.courseLockAngle","HOME.dataRecorderStatus","HOME.dataRecorderRemainCapacity","HOME.dataRecorderRemainTime","HOME.dataRecorderFileIndex","HOME.isFlycInSimulationMode","HOME.isFlycInNavigationMode","HOME.isWingBroken","HOME.isBigGale","HOME.isBigGaleWarning","HOME.isCompassInstallErr","HOME.isFanCurrentInAbnormalState","HOME.paddleState","HOME.heightLimitStatus","HOME.useAbsoluteHeight","HOME.motor1EscmState","HOME.motor2EscmState","HOME.motor3EscmState","HOME.motor4EscmState","HOME.motor5EscmState","HOME.motor6EscmState","HOME.motor7EscmState","HOME.motor8EscmState","HOME.forceLandingHeight [m]","RECOVER.droneType","RECOVER.appType","RECOVER.appVersion","RECOVER.aircraftSnBytes","RECOVER.aircraftName","RECOVER.activeTimestamp","RECOVER.cameraSn","RECOVER.rcSn","RECOVER.batterySn","RECOVER.gimbalType","FIRMWARE.version","DETAILS.street","DETAILS.citypart","DETAILS.city","DETAILS.area","DETAILS.isFavorite","DETAILS.isNew","DETAILS.needUpload","DETAILS.recordLineCount","DETAILS.timestamp","DETAILS.latitude","DETAILS.longitude","DETAILS.totalDistance [m]","DETAILS.totalTime [s]","DETAILS.maxHeight [m]","DETAILS.maxHorizontalSpeed [m/s]","DETAILS.maxVerticalSpeed [m/s]","DETAILS.photoNum","DETAILS.videoTime [s]","DETAILS.takeOffAltitude [m]","DETAILS.droneType","DETAILS.activeTimestamp","DETAILS.aircraftName","DETAILS.aircraftSnBytes","DETAILS.cameraSn","DETAILS.rcSn","DETAILS.batterySn","DETAILS.appType","DETAILS.appVersion","APP_GPS.latitude","APP_GPS.longitude","APP_GPS.accuracy","APP_TIP.tip","APP_WARN.warn","APP_SER_WARN.warn"];
  public csvHeaders: any[] = [];
  form: FormGroup;
  progress: number = 0;
  filename:string="";
  file:File;
  loading:boolean=false;
  check=true
  @ViewChild('customLoadingTemplate', { static: false }) customLoadingTemplate: TemplateRef<any>;
  public primaryColour = PrimaryWhite;
  public secondaryColour = SecondaryGrey;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  constructor(private formBuilder: FormBuilder, private commonService: CommonService, private location: Location ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name:this.name,
    })
  }
  name = new FormControl();

  uploadFile(event) {
    var regex = new RegExp("(.*?)\.(csv)$");
      if (!(regex.test(event.target.value.toLowerCase()))) {
        event.target.value = '';
        this.file =null;
        this.check=true;

        alert('Please select correct file format');
      }else
      {

      let reader = new FileReader();
      reader.readAsText(event.target.files[0]);
      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        this.csvHeaders = this.getHeaderArray(csvRecordsArray);
         let missing =  this.headers.filter(item => this.csvHeaders.indexOf(item) < 0);

         if(missing.length==0)
         {
             this.file =event.target.files[0];
             if(this.file)
             {
               this.check=false;
             }
         }else
         {
           alert("Select Correct CSV File")
           event.target.value = '';
         }
      };

      reader.onerror = function () {
        alert('Unable to read ' + event.target.files[0]);
      };
    
      
    }


  }

  submitUser() 
  {
    if(this.file)
    {
      this.loading=true
      this.commonService.uploadImage("uploadfile",this.file)
      .subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round(event.loaded / event.total * 100);
            console.log(`Uploaded! ${this.progress}%`);
            break;
          case HttpEventType.Response:
            console.log('file successfully uploaded', event.body);
            this.loading=false;
            this.file=null;
            alert("file successfully uploaded");
            location.reload();
            setTimeout(() => {
              this.progress = 0;
            }, 1500);
  
        }
      })
    }else
    {
      this.file=null
    }

    


}

getHeaderArray(csvRecordsArr: any) {
  let headers = (<string>csvRecordsArr[0]).split(',');
  let headerArray = [];
  for (let j = 0; j < headers.length; j++) {
    headerArray.push(headers[j]);
  }
  return headerArray;
}

}
