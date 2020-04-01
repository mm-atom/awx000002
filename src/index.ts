interface IAi {
	readonly data: {
		readonly [attr: string]: unknown;
	};
	fire<T>(action: string, ...args: unknown[]): Promise<T>;
	emit<T>(event: string, ...args: unknown[]): Promise<T>;
}

interface IAiWeappAppData {
	readonly [attr: string]: unknown;
	readonly app: wx.App;
	inner_audio_context?: wx.InnerAudioContext;
	background_audio_manager?: wx.BackgroundAudioManager;
	record_manager?: wx.RecorderManager;
	video_context?: wx.VideoContext;
	camera_context?: wx.CameraContext;
}

export default interface IAiWeappPage extends IAi {
	page: unknown;
	readonly data: {
		readonly [attr: string]: unknown;
		readonly page: wx.Page;
		readonly params: { [name: string]: string; };
		readonly mm: IAiWeappAppData;
	};
	// eslint-disable-next-line semi
}
