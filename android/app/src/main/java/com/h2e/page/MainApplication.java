package com.h2e.page;

import android.app.Application;

import com.facebook.CallbackManager;
import com.facebook.react.ReactApplication;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.airbnb.android.react.lottie.LottiePackage;
import com.oblador.vectoricons.VectorIconsPackage;

import co.apptailor.googlesignin.RNGoogleSigninPackage;

import io.invertase.firebase.RNFirebasePackage;

import com.facebook.reactnative.androidsdk.FBSDKPackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
              new MainReactPackage(),
            new SplashScreenReactPackage(),
            new LottiePackage(),
            new VectorIconsPackage(),
              new RNGoogleSigninPackage(),
              new RNFirebasePackage(),
              new RNFirebaseAuthPackage(),
              new FBSDKPackage(mCallbackManager)
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
