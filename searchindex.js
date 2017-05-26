Search.setIndex({docnames:["Common-installation-and-execution-problems","Cpp-Development","Create-a-pipeline","Getting-started-guide","How-Python-and-C---fits-together","Python-API","bfmap","bifrost","bifrost.blocks","bifrost.views","cpp_reference","index","intro","views","your-first-blocks"],envversion:52,filenames:["Common-installation-and-execution-problems.rst","Cpp-Development.rst","Create-a-pipeline.rst","Getting-started-guide.rst","How-Python-and-C---fits-together.rst","Python-API.rst","bfmap.rst","bifrost.rst","bifrost.blocks.rst","bifrost.views.rst","cpp_reference.rst","index.rst","intro.rst","views.rst","your-first-blocks.rst"],objects:{"":{bifrost:[7,0,0,"-"]},"bifrost.DataType":{DataType:[7,1,1,""]},"bifrost.DataType.DataType":{as_BFdtype:[7,2,1,""],as_complex:[7,2,1,""],as_floating_point:[7,2,1,""],as_integer:[7,2,1,""],as_nbit:[7,2,1,""],as_numpy_dtype:[7,2,1,""],as_real:[7,2,1,""],is_complex:[7,3,1,""],is_floating_point:[7,3,1,""],is_integer:[7,3,1,""],is_real:[7,3,1,""],is_signed:[7,3,1,""],itemsize:[7,3,1,""],itemsize_bits:[7,3,1,""]},"bifrost.Space":{Space:[7,1,1,""]},"bifrost.Space.Space":{as_BFspace:[7,2,1,""]},"bifrost.address":{Address:[7,1,1,""]},"bifrost.address.Address":{address:[7,3,1,""],family:[7,3,1,""],mtu:[7,3,1,""],port:[7,3,1,""]},"bifrost.affinity":{get_core:[7,4,1,""],set_core:[7,4,1,""],set_openmp_cores:[7,4,1,""]},"bifrost.block":{CopyBlock:[7,1,1,""],DedisperseBlock:[7,1,1,""],FFTBlock:[7,1,1,""],FoldBlock:[7,1,1,""],IFFTBlock:[7,1,1,""],KurtosisBlock:[7,1,1,""],MultiAddBlock:[7,1,1,""],MultiTransformBlock:[7,1,1,""],NumpyBlock:[7,1,1,""],NumpySourceBlock:[7,1,1,""],Pipeline:[7,1,1,""],SigprocReadBlock:[7,1,1,""],SinkBlock:[7,1,1,""],SourceBlock:[7,1,1,""],SplitterBlock:[7,1,1,""],TestingBlock:[7,1,1,""],TransformBlock:[7,1,1,""],WaterfallBlock:[7,1,1,""],WriteAsciiBlock:[7,1,1,""],WriteHeaderBlock:[7,1,1,""],insert_zeros_evenly:[7,4,1,""]},"bifrost.block.CopyBlock":{main:[7,2,1,""]},"bifrost.block.DedisperseBlock":{dedisperse:[7,2,1,""],main:[7,2,1,""]},"bifrost.block.FFTBlock":{load_settings:[7,2,1,""],main:[7,2,1,""]},"bifrost.block.FoldBlock":{calculate_bin_indices:[7,2,1,""],calculate_delay:[7,2,1,""],load_settings:[7,2,1,""],main:[7,2,1,""]},"bifrost.block.IFFTBlock":{load_settings:[7,2,1,""],main:[7,2,1,""]},"bifrost.block.KurtosisBlock":{load_settings:[7,2,1,""],main:[7,2,1,""]},"bifrost.block.MultiAddBlock":{main:[7,2,1,""],ring_names:[7,3,1,""]},"bifrost.block.MultiTransformBlock":{flatten:[7,2,1,""],izip:[7,2,1,""],load_settings:[7,2,1,""],read:[7,2,1,""],write:[7,2,1,""]},"bifrost.block.NumpyBlock":{calculate_output_headers:[7,2,1,""],create_ring_names:[7,2,1,""],did_header_change:[7,2,1,""],load_settings:[7,2,1,""],main:[7,2,1,""],reshape_inspans:[7,2,1,""]},"bifrost.block.NumpySourceBlock":{calculate_output_settings:[7,2,1,""],load_user_headers:[7,2,1,""],main:[7,2,1,""]},"bifrost.block.Pipeline":{main:[7,2,1,""],unique_ring_names:[7,2,1,""]},"bifrost.block.SigprocReadBlock":{main:[7,2,1,""]},"bifrost.block.SinkBlock":{iterate_ring_read:[7,2,1,""],load_settings:[7,2,1,""]},"bifrost.block.SourceBlock":{iterate_ring_write:[7,2,1,""]},"bifrost.block.SplitterBlock":{load_settings:[7,2,1,""],main:[7,2,1,""],ring_names:[7,3,1,""]},"bifrost.block.TestingBlock":{main:[7,2,1,""]},"bifrost.block.TransformBlock":{iterate_ring_read:[7,2,1,""],iterate_ring_write:[7,2,1,""],load_settings:[7,2,1,""],ring_transfer:[7,2,1,""]},"bifrost.block.WaterfallBlock":{generate_waterfall_matrix:[7,2,1,""],main:[7,2,1,""],save_waterfall_plot:[7,2,1,""]},"bifrost.block.WriteAsciiBlock":{load_settings:[7,2,1,""],main:[7,2,1,""]},"bifrost.block.WriteHeaderBlock":{load_settings:[7,2,1,""],main:[7,2,1,""]},"bifrost.blocks":{accumulate:[8,0,0,"-"],audio:[8,0,0,"-"],binary_io:[8,0,0,"-"],copy:[8,0,0,"-"],detect:[8,0,0,"-"],fdmt:[8,0,0,"-"],fft:[8,0,0,"-"],fftshift:[8,0,0,"-"],guppi_raw:[8,0,0,"-"],print_header:[8,0,0,"-"],quantize:[8,0,0,"-"],reverse:[8,0,0,"-"],scrunch:[8,0,0,"-"],sigproc:[8,0,0,"-"],transpose:[8,0,0,"-"],unpack:[8,0,0,"-"],wav:[8,0,0,"-"]},"bifrost.blocks.accumulate":{AccumulateBlock:[8,1,1,""],accumulate:[8,4,1,""],dtype:[8,3,1,""],gulp_nframe:[8,3,1,""],iring:[8,3,1,""],nframe:[8,3,1,""]},"bifrost.blocks.accumulate.AccumulateBlock":{define_valid_input_spaces:[8,2,1,""],on_data:[8,2,1,""],on_sequence:[8,2,1,""]},"bifrost.blocks.audio":{AudioSourceBlock:[8,1,1,""],audio_kwargs:[8,3,1,""],gulp_nframe:[8,3,1,""],read_audio:[8,4,1,""]},"bifrost.blocks.audio.AudioSourceBlock":{create_reader:[8,2,1,""],on_data:[8,2,1,""],on_sequence:[8,2,1,""],stop:[8,2,1,""]},"bifrost.blocks.binary_io":{BinaryFileRead:[8,1,1,""],BinaryFileReadBlock:[8,1,1,""],BinaryFileWriteBlock:[8,1,1,""]},"bifrost.blocks.binary_io.BinaryFileRead":{close:[8,2,1,""],read:[8,2,1,""]},"bifrost.blocks.binary_io.BinaryFileReadBlock":{create_reader:[8,2,1,""],on_data:[8,2,1,""],on_sequence:[8,2,1,""]},"bifrost.blocks.binary_io.BinaryFileWriteBlock":{on_data:[8,2,1,""],on_sequence:[8,2,1,""]},"bifrost.blocks.copy":{CopyBlock:[8,1,1,""],copy:[8,4,1,""],iring:[8,3,1,""],space:[8,3,1,""]},"bifrost.blocks.copy.CopyBlock":{on_data:[8,2,1,""],on_sequence:[8,2,1,""]},"bifrost.blocks.detect":{DetectBlock:[8,1,1,""],axis:[8,3,1,""],detect:[8,4,1,""],iring:[8,3,1,""],mode:[8,3,1,""]},"bifrost.blocks.detect.DetectBlock":{define_valid_input_spaces:[8,2,1,""],on_data:[8,2,1,""],on_sequence:[8,2,1,""]},"bifrost.blocks.fdmt":{FdmtBlock:[8,1,1,""],exponent:[8,3,1,""],fdmt:[8,4,1,""],iring:[8,3,1,""],max_dm:[8,3,1,""],negative_delays:[8,3,1,""]},"bifrost.blocks.fdmt.FdmtBlock":{define_valid_input_spaces:[8,2,1,""],on_data:[8,2,1,""],on_sequence:[8,2,1,""]},"bifrost.blocks.fft":{FftBlock:[8,1,1,""],axes:[8,3,1,""],fft:[8,4,1,""],iring:[8,3,1,""]},"bifrost.blocks.fft.FftBlock":{define_valid_input_spaces:[8,2,1,""],on_data:[8,2,1,""],on_sequence:[8,2,1,""]},"bifrost.blocks.fftshift":{FftShiftBlock:[8,1,1,""],axes:[8,3,1,""],fftshift:[8,4,1,""],inverse:[8,3,1,""],iring:[8,3,1,""]},"bifrost.blocks.fftshift.FftShiftBlock":{define_valid_input_spaces:[8,2,1,""],on_data:[8,2,1,""],on_sequence:[8,2,1,""]},"bifrost.blocks.guppi_raw":{GuppiRawSourceBlock:[8,1,1,""],filenames:[8,3,1,""],get_with_default:[8,4,1,""],mjd2unix:[8,4,1,""],read_guppi_raw:[8,4,1,""]},"bifrost.blocks.guppi_raw.GuppiRawSourceBlock":{create_reader:[8,2,1,""],on_data:[8,2,1,""],on_sequence:[8,2,1,""]},"bifrost.blocks.print_header":{PrintHeaderBlock:[8,1,1,""],iring:[8,3,1,""],print_header:[8,4,1,""]},"bifrost.blocks.print_header.PrintHeaderBlock":{on_data:[8,2,1,""],on_sequence:[8,2,1,""],on_sequence_end:[8,2,1,""]},"bifrost.blocks.quantize":{QuantizeBlock:[8,1,1,""],dtype:[8,3,1,""],iring:[8,3,1,""],quantize:[8,4,1,""]},"bifrost.blocks.quantize.QuantizeBlock":{define_valid_input_spaces:[8,2,1,""],on_data:[8,2,1,""],on_sequence:[8,2,1,""]},"bifrost.blocks.reverse":{ReverseBlock:[8,1,1,""],axes:[8,3,1,""],iring:[8,3,1,""],reverse:[8,4,1,""]},"bifrost.blocks.reverse.ReverseBlock":{define_valid_input_spaces:[8,2,1,""],on_data:[8,2,1,""],on_sequence:[8,2,1,""]},"bifrost.blocks.scrunch":{ScrunchBlock:[8,1,1,""],factor:[8,3,1,""],iring:[8,3,1,""],scrunch:[8,4,1,""]},"bifrost.blocks.scrunch.ScrunchBlock":{define_output_nframes:[8,2,1,""],define_valid_input_spaces:[8,2,1,""],on_data:[8,2,1,""],on_sequence:[8,2,1,""]},"bifrost.blocks.sigproc":{SigprocSinkBlock:[8,1,1,""],SigprocSourceBlock:[8,1,1,""],copy_item_if_exists:[8,4,1,""],get_with_default:[8,4,1,""],mjd2unix:[8,4,1,""],read_sigproc:[8,4,1,""],unix2mjd:[8,4,1,""],write_sigproc:[8,4,1,""]},"bifrost.blocks.sigproc.SigprocSinkBlock":{on_data:[8,2,1,""],on_sequence:[8,2,1,""],on_sequence_end:[8,2,1,""]},"bifrost.blocks.sigproc.SigprocSourceBlock":{create_reader:[8,2,1,""],on_data:[8,2,1,""],on_sequence:[8,2,1,""]},"bifrost.blocks.transpose":{TransposeBlock:[8,1,1,""],axes:[8,3,1,""],iring:[8,3,1,""],transpose:[8,4,1,""]},"bifrost.blocks.transpose.TransposeBlock":{on_data:[8,2,1,""],on_sequence:[8,2,1,""]},"bifrost.blocks.unpack":{UnpackBlock:[8,1,1,""],unpack:[8,4,1,""]},"bifrost.blocks.unpack.UnpackBlock":{define_valid_input_spaces:[8,2,1,""],on_data:[8,2,1,""],on_sequence:[8,2,1,""]},"bifrost.blocks.wav":{WavSinkBlock:[8,1,1,""],WavSourceBlock:[8,1,1,""],read_wav:[8,4,1,""],wav_read_chunk_desc:[8,4,1,""],wav_read_header:[8,4,1,""],wav_read_subchunk_desc:[8,4,1,""],wav_read_subchunk_fmt:[8,4,1,""],wav_write_header:[8,4,1,""],write_wav:[8,4,1,""]},"bifrost.blocks.wav.WavSinkBlock":{on_data:[8,2,1,""],on_sequence:[8,2,1,""],on_sequence_end:[8,2,1,""]},"bifrost.blocks.wav.WavSourceBlock":{create_reader:[8,2,1,""],on_data:[8,2,1,""],on_sequence:[8,2,1,""]},"bifrost.core":{cuda_enabled:[7,4,1,""],debug_enabled:[7,4,1,""],status_string:[7,4,1,""]},"bifrost.device":{get_device:[7,4,1,""],set_device:[7,4,1,""],stream_synchronize:[7,4,1,""]},"bifrost.dtype":{from_complex64:[7,4,1,""],name_nbit2numpy:[7,4,1,""],numpy2bifrost:[7,4,1,""],numpy2string:[7,4,1,""],split_name_nbit:[7,4,1,""],string2numpy:[7,4,1,""],to_complex64:[7,4,1,""]},"bifrost.fdmt":{Fdmt:[7,1,1,""]},"bifrost.fdmt.Fdmt":{execute:[7,2,1,""],execute_workspace:[7,2,1,""],get_workspace_size:[7,2,1,""],init:[7,2,1,""]},"bifrost.fft":{Fft:[7,1,1,""]},"bifrost.fft.Fft":{execute:[7,2,1,""],execute_workspace:[7,2,1,""],init:[7,2,1,""]},"bifrost.guppi_raw":{read_header:[7,4,1,""]},"bifrost.header_standard":{enforce_header_standard:[7,4,1,""]},"bifrost.linalg":{LinAlg:[7,1,1,""]},"bifrost.linalg.LinAlg":{matmul:[7,2,1,""]},"bifrost.map":{map:[7,4,1,""]},"bifrost.memory":{alignment:[7,4,1,""],memcpy2D:[7,4,1,""],memcpy:[7,4,1,""],memset2D:[7,4,1,""],memset:[7,4,1,""],raw_free:[7,4,1,""],raw_get_space:[7,4,1,""],raw_malloc:[7,4,1,""],space_accessible:[7,4,1,""]},"bifrost.ndarray":{BFArrayInfo:[7,1,1,""],asarray:[7,4,1,""],copy_array:[7,4,1,""],empty:[7,4,1,""],empty_like:[7,4,1,""],memset_array:[7,4,1,""],ndarray:[7,1,1,""],zeros:[7,4,1,""],zeros_like:[7,4,1,""]},"bifrost.ndarray.ndarray":{as_BFarray:[7,2,1,""],as_GPUArray:[7,2,1,""],byteswap:[7,2,1,""],conj:[7,2,1,""],copy:[7,2,1,""],tofile:[7,2,1,""],view:[7,2,1,""]},"bifrost.pipeline":{Block:[7,1,1,""],BlockScope:[7,1,1,""],MultiTransformBlock:[7,1,1,""],Pipeline:[7,1,1,""],SinkBlock:[7,1,1,""],SourceBlock:[7,1,1,""],TransformBlock:[7,1,1,""],block:[7,3,1,""],block_scope:[7,4,1,""],block_view:[7,4,1,""],get_current_block_scope:[7,4,1,""],get_default_pipeline:[7,4,1,""],get_ring:[7,4,1,""],header_transform:[7,3,1,""],izip:[7,4,1,""],join_all:[7,4,1,""],try_join:[7,4,1,""]},"bifrost.pipeline.Block":{begin_sequences:[7,2,1,""],begin_writing:[7,2,1,""],create_ring:[7,2,1,""],define_output_nframes:[7,2,1,""],define_valid_input_spaces:[7,2,1,""],instance_counts:[7,3,1,""],num_outputs:[7,2,1,""],reserve_spans:[7,2,1,""],run:[7,2,1,""],shutdown:[7,2,1,""]},"bifrost.pipeline.BlockScope":{cache_scope_hierarchy:[7,2,1,""],dot_graph:[7,2,1,""],get_temp_storage:[7,2,1,""],instance_count:[7,3,1,""],is_fused_with:[7,2,1,""]},"bifrost.pipeline.MultiTransformBlock":{define_output_nframes:[7,2,1,""],main:[7,2,1,""],on_data:[7,2,1,""],on_sequence:[7,2,1,""],on_sequence_end:[7,2,1,""]},"bifrost.pipeline.Pipeline":{as_default:[7,2,1,""],instance_count:[7,3,1,""],run:[7,2,1,""],shutdown:[7,2,1,""],shutdown_on_signals:[7,2,1,""]},"bifrost.pipeline.SinkBlock":{define_valid_input_spaces:[7,2,1,""],on_data:[7,2,1,""],on_sequence:[7,2,1,""],on_sequence_end:[7,2,1,""]},"bifrost.pipeline.SourceBlock":{create_reader:[7,2,1,""],define_output_nframes:[7,2,1,""],define_valid_input_spaces:[7,2,1,""],main:[7,2,1,""],on_data:[7,2,1,""],on_sequence:[7,2,1,""]},"bifrost.pipeline.TransformBlock":{define_output_nframes:[7,2,1,""],define_valid_input_spaces:[7,2,1,""],on_data:[7,2,1,""],on_sequence:[7,2,1,""],on_sequence_end:[7,2,1,""]},"bifrost.portaudio":{PaDeviceInfo:[7,1,1,""],PaStreamParameters:[7,1,1,""],PortAudioError:[7,5,1,""],Stream:[7,1,1,""],get_device_count:[7,4,1,""],open:[7,4,1,""],suppress_fd:[7,1,1,""]},"bifrost.portaudio.PaDeviceInfo":{defaultHighInputLatency:[7,3,1,""],defaultHighOutputLatency:[7,3,1,""],defaultLowInputLatency:[7,3,1,""],defaultLowOutputLatency:[7,3,1,""],defaultSampleRate:[7,3,1,""],hostApi:[7,3,1,""],maxInputChannels:[7,3,1,""],maxOutputChannels:[7,3,1,""],name:[7,3,1,""],structVersion:[7,3,1,""]},"bifrost.portaudio.PaStreamParameters":{channelCount:[7,3,1,""],device:[7,3,1,""],hostApiSpecificStreamInfo:[7,3,1,""],sampleFormat:[7,3,1,""],suggestedLatency:[7,3,1,""]},"bifrost.portaudio.Stream":{close:[7,2,1,""],read:[7,2,1,""],readinto:[7,2,1,""],start:[7,2,1,""],stop:[7,2,1,""],time:[7,2,1,""],write:[7,2,1,""]},"bifrost.proclog":{ProcLog:[7,1,1,""],load_by_filename:[7,4,1,""],load_by_pid:[7,4,1,""]},"bifrost.proclog.ProcLog":{update:[7,2,1,""]},"bifrost.quantize":{quantize:[7,4,1,""]},"bifrost.ring":{ReadSequence:[7,1,1,""],ReadSpan:[7,1,1,""],Ring:[7,1,1,""],RingWriter:[7,1,1,""],SequenceBase:[7,1,1,""],SpanBase:[7,1,1,""],WriteSequence:[7,1,1,""],WriteSpan:[7,1,1,""]},"bifrost.ring.ReadSequence":{acquire:[7,2,1,""],close:[7,2,1,""],increment:[7,2,1,""],read:[7,2,1,""]},"bifrost.ring.ReadSpan":{release:[7,2,1,""]},"bifrost.ring.Ring":{begin_writing:[7,2,1,""],end_writing:[7,2,1,""],name:[7,3,1,""],open_earliest_sequence:[7,2,1,""],open_latest_sequence:[7,2,1,""],open_sequence:[7,2,1,""],open_sequence_at:[7,2,1,""],read:[7,2,1,""],resize:[7,2,1,""],space:[7,3,1,""],writing_ended:[7,2,1,""]},"bifrost.ring.RingWriter":{begin_sequence:[7,2,1,""]},"bifrost.ring.SequenceBase":{header:[7,3,1,""],header_size:[7,3,1,""],name:[7,3,1,""],nringlet:[7,3,1,""],ring:[7,3,1,""],time_tag:[7,3,1,""]},"bifrost.ring.SpanBase":{data:[7,3,1,""],data_view:[7,2,1,""],nringlet:[7,3,1,""],offset:[7,3,1,""],ring:[7,3,1,""],size:[7,3,1,""],stride:[7,3,1,""]},"bifrost.ring.WriteSequence":{end:[7,2,1,""],reserve:[7,2,1,""]},"bifrost.ring.WriteSpan":{close:[7,2,1,""],commit:[7,2,1,""]},"bifrost.ring2":{ReadSequence:[7,1,1,""],ReadSpan:[7,1,1,""],Ring:[7,1,1,""],RingWriter:[7,1,1,""],SequenceBase:[7,1,1,""],SpanBase:[7,1,1,""],WriteSequence:[7,1,1,""],WriteSpan:[7,1,1,""],accumulate:[7,4,1,""],compose_unary_funcs:[7,4,1,""],ring_view:[7,4,1,""],split_shape:[7,4,1,""]},"bifrost.ring2.ReadSequence":{acquire:[7,2,1,""],close:[7,2,1,""],header:[7,3,1,""],increment:[7,2,1,""],read:[7,2,1,""],resize:[7,2,1,""]},"bifrost.ring2.ReadSpan":{release:[7,2,1,""]},"bifrost.ring2.Ring":{begin_writing:[7,2,1,""],end_writing:[7,2,1,""],instance_count:[7,3,1,""],name:[7,3,1,""],open_earliest_sequence:[7,2,1,""],open_latest_sequence:[7,2,1,""],open_sequence:[7,2,1,""],read:[7,2,1,""],resize:[7,2,1,""],view:[7,2,1,""]},"bifrost.ring2.RingWriter":{begin_sequence:[7,2,1,""]},"bifrost.ring2.SequenceBase":{header:[7,3,1,""],header_size:[7,3,1,""],name:[7,3,1,""],nringlet:[7,3,1,""],ring:[7,3,1,""],tensor:[7,3,1,""],time_tag:[7,3,1,""]},"bifrost.ring2.SpanBase":{data:[7,3,1,""],dtype:[7,3,1,""],frame_nbyte:[7,3,1,""],frame_offset:[7,3,1,""],nframe:[7,3,1,""],ring:[7,3,1,""],sequence:[7,3,1,""],shape:[7,3,1,""],strides:[7,3,1,""],tensor:[7,3,1,""]},"bifrost.ring2.WriteSequence":{end:[7,2,1,""],reserve:[7,2,1,""]},"bifrost.ring2.WriteSpan":{close:[7,2,1,""],commit:[7,2,1,""]},"bifrost.sigproc":{SigprocFile:[7,1,1,""],SigprocSettings:[7,1,1,""],pack:[7,4,1,""],seek_to_data:[7,4,1,""],unpack:[7,4,1,""]},"bifrost.sigproc.SigprocFile":{append_data:[7,2,1,""],clear:[7,2,1,""],close:[7,2,1,""],get_nframe:[7,2,1,""],open:[7,2,1,""],read_data:[7,2,1,""],read_header:[7,2,1,""],write_to:[7,2,1,""]},"bifrost.sigproc.SigprocSettings":{interpret_header:[7,2,1,""]},"bifrost.sigproc2":{SigprocFile:[7,1,1,""],id2machine:[7,4,1,""],id2telescope:[7,4,1,""],machine2id:[7,4,1,""],telescope2id:[7,4,1,""],unpack:[7,4,1,""],write_header:[7,4,1,""]},"bifrost.sigproc2.SigprocFile":{bandwidth:[7,2,1,""],cfreq:[7,2,1,""],close:[7,2,1,""],duration:[7,2,1,""],nframe:[7,2,1,""],open:[7,2,1,""],read:[7,2,1,""],readinto:[7,2,1,""],seek:[7,2,1,""]},"bifrost.temp_storage":{TempStorage:[7,1,1,""],TempStorageAllocation:[7,1,1,""]},"bifrost.temp_storage.TempStorage":{allocate:[7,2,1,""]},"bifrost.temp_storage.TempStorageAllocation":{release:[7,2,1,""]},"bifrost.transpose":{transpose:[7,4,1,""]},"bifrost.udp_capture":{UDPCapture:[7,1,1,""]},"bifrost.udp_capture.UDPCapture":{end:[7,2,1,""],flush:[7,2,1,""],recv:[7,2,1,""]},"bifrost.udp_socket":{UDPSocket:[7,1,1,""]},"bifrost.udp_socket.UDPSocket":{bind:[7,2,1,""],close:[7,2,1,""],connect:[7,2,1,""],fileno:[7,2,1,""],mtu:[7,3,1,""],shutdown:[7,2,1,""],timeout:[7,3,1,""]},"bifrost.udp_transmit":{UDPTransmit:[7,1,1,""]},"bifrost.udp_transmit.UDPTransmit":{send:[7,2,1,""],sendmany:[7,2,1,""]},"bifrost.units":{convert_units:[7,4,1,""],transform_units:[7,4,1,""]},"bifrost.unpack":{unpack:[7,4,1,""]},"bifrost.views":{basic_views:[9,0,0,"-"]},"bifrost.views.basic_views":{astype:[9,4,1,""],custom:[9,4,1,""],expand_dims:[9,4,1,""],merge_axes:[9,4,1,""],rename_axis:[9,4,1,""],split_axis:[9,4,1,""]},bifrost:{DataType:[7,0,0,"-"],Space:[7,0,0,"-"],address:[7,0,0,"-"],affinity:[7,0,0,"-"],block:[7,0,0,"-"],blocks:[8,0,0,"-"],core:[7,0,0,"-"],device:[7,0,0,"-"],dtype:[7,0,0,"-"],fdmt:[7,0,0,"-"],fft:[7,0,0,"-"],guppi_raw:[7,0,0,"-"],header_standard:[7,0,0,"-"],libbifrost:[7,0,0,"-"],linalg:[7,0,0,"-"],map:[7,0,0,"-"],memory:[7,0,0,"-"],ndarray:[7,0,0,"-"],pipeline:[7,0,0,"-"],portaudio:[7,0,0,"-"],proclog:[7,0,0,"-"],quantize:[7,0,0,"-"],ring2:[7,0,0,"-"],ring:[7,0,0,"-"],sigproc2:[7,0,0,"-"],sigproc:[7,0,0,"-"],temp_storage:[7,0,0,"-"],transpose:[7,0,0,"-"],udp_capture:[7,0,0,"-"],udp_socket:[7,0,0,"-"],udp_transmit:[7,0,0,"-"],units:[7,0,0,"-"],unpack:[7,0,0,"-"],version:[7,0,0,"-"],views:[9,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception"},terms:{"24khz":7,"68055556n":7,"6mhz":7,"8bit":7,"break":2,"byte":[1,7],"case":[2,7,14],"char":[1,7],"class":[4,5,7,8,14],"const":1,"default":[5,8],"export":0,"final":[2,5,7,14],"float":[1,4,7,8],"function":[1,2,4,5,6,7,14],"import":[2,3,4,5,6,8,14],"int":[1,4,7,8,14],"long":[2,4,5],"new":[2,5,7,8,9,14],"return":[4,7,8,14],"super":[5,14],"switch":8,"true":[1,7,8],"try":[3,4],"void":1,"while":12,But:2,For:[0,2,3,5,8,14],NOT:8,One:[2,12],That:4,The:[2,3,5,6,7,8,11,12,13],Then:[2,3],There:14,These:[2,5,6,7,13],Use:[5,7,8],Used:8,With:2,__enter__:14,__exit__:14,__getitem__:7,__init__:[5,14],__main__:14,__name__:14,__setitem__:7,_bf:4,_ctype:7,_with_added_valu:14,about:5,abov:[0,5,7,8],accept:[4,8],access:1,accid:14,accomplish:2,accord:5,accumul:[7,11],accumulateblock:8,accur:8,achiev:8,acquaint:6,acquir:7,activ:5,actual:[2,5],add:[0,4,6,7,13,14],added:[7,14],adding:5,addit:[1,3],address:[4,11],addstuff:4,adjust:7,affect:5,affin:11,after:[2,4,5],again:[5,14],aka:4,algorithm:[5,7,8,14],alia:9,align:7,align_msb:[7,8],all:[3,4,5,6,7,11,12,14],alloc:[1,5,7],allow:[3,5,7,12,13,14],along:[2,4,5,8,12],alpha:7,alreadi:[3,14],also:[2,5,6,14],alwai:[5,7],ani:[5,7,8,12],anoth:[5,8],anyth:[12,14],api:[1,12],append:[5,7,14],append_data:7,appli:[6,7,8,13],applic:12,approach:12,appropri:7,apt:[0,3],arbitrari:[5,7],arbitrarili:5,arg:[6,7,8,14],argument:[2,6,8,14],arithmet:6,around:8,arr:7,arrai:[4,6,7,8,13,14],arrang:[2,8],arriv:14,arxiv:8,as_bfarrai:[4,7],as_bfdtyp:7,as_bfspac:7,as_complex:7,as_default:7,as_floating_point:7,as_gpuarrai:7,as_integ:7,as_nbit:7,as_numpy_dtyp:7,as_real:7,asarrai:7,ascii:7,ask:[8,14],assert:5,assign:[5,12],associ:7,assum:[2,3],astronomi:[8,12],astyp:9,attribut:7,audio:[2,7,11],audio_kwarg:8,audiosourceblock:8,auto:7,automat:[5,8],avail:[4,14],averag:[8,12],axes:[2,7,8,13],axi:[2,6,7,8,9,13],axis1:9,axis2:9,axis_label:[2,8],az_start:7,b_add:14,b_gup2:13,b_guppi:13,b_print2:14,b_print:14,b_read:14,back:[2,3],backend:7,bake:14,bandwidth:7,barak:8,barycentr:7,base:[2,4,5,6,7,8],basi:7,basic:[3,8,14],basic_view:7,batch:7,beam:8,beat:2,becaus:[0,5,7],becom:13,been:4,befor:[4,5,7,8],begin:[1,7],begin_sequ:7,begin_writ:7,behind:2,being:[2,5],below:[0,3,6,7,14],ben:[8,14],beta:7,between:[7,8,12],bf_space_system:1,bf_status_success:4,bfarrayinfo:7,bfmap:11,bfoffset:1,bfp:14,bfring:1,bfringbeginwrit:1,bfringcreat:1,bfringdestroi:1,bfringendwrit:1,bfringres:1,bfringsequencebegin:1,bfringsequenceclos:1,bfringsequenceend:1,bfringsequenceopenlatest:1,bfringspanacquir:1,bfringspancommit:1,bfringspangetdata:1,bfringspanreleas:1,bfringspanreserv:1,bfrsequenc:1,bfrspan:1,bfsize:1,bfspan:1,bfstatu:4,bfwsequenc:1,bfwspan:1,bifrost:[0,1,2,5,6,13,14],bifrostifi:4,big_endian:4,bin:[7,14],binari:[7,8,14],binary_file_io:8,binary_io:[7,11,14],binaryfileread:[8,14],binaryfilereadblock:[8,14],binaryfilewriteblock:8,bind:7,bit:[2,6,7,8,12,14],black:5,blanket:5,block:[0,9,11,13],block_or_r:7,block_scop:7,block_view:[7,9],blockscop:7,blocsiz:7,bool:8,bootstrap:3,bottleneck:12,bottom:2,boundari:7,box:5,bpm:2,branch:3,bravo:4,bridg:4,broadcast:[6,7],buf:7,buf_nfram:7,buffer:[2,7,8,11,13,14],buffer_byt:1,buffer_factor:7,buffer_nfram:[7,13],buffer_ntim:7,build:[3,14],built:3,burst:8,byteswap:7,cache_scope_hierarchi:7,calcul:[2,5,7],calculate_bin_indic:7,calculate_delai:7,calculate_output_head:7,calculate_output_set:7,call:[2,3,5,6,7,12,14],can:[1,2,3,4,5,7,8,11,12],cannot:11,captur:5,car:12,card:12,care:12,carefulli:2,center:7,centr:7,central:8,cf32:[7,8,14],cfreq:7,chain:12,chan:7,chan_bw:7,chang:[7,13,14],channel:[2,7,13],channelcount:7,check:[3,5,8],choic:4,choos:5,chunk:[2,12,13],chunk_siz:8,chunked_data:2,ci4:7,clean:7,cleanup:7,clear:7,clever:4,clone:3,close:[1,5,7,8,14],closer:6,code:[5,11,12,14],collect:[2,7],com:3,combin:7,come:[2,3,4,14],command:[0,3,5],commit:[1,7],common:[1,3,4,11,12],compat:2,compil:0,complet:[4,7,11],complex:[6,7,8],complex_numb:7,compon:[2,6,7],compose_unary_func:7,comput:[6,7,12],concept:[5,11],conceptu:[12,13],config:0,confus:5,conj:7,conjug:[4,7],connect:[2,5,7,12],consecut:7,consist:5,construct:2,contain:[0,2,5,7,8,12],content:[2,11],context:[5,14],contiguous_byt:7,contiguous_span:7,continu:4,convent:6,convert:[2,7],convert_unit:7,cool:4,copi:[1,2,3,5,7,11,12,13,14],copy_arrai:7,copy_item_if_exist:8,copyblock:[7,8],core:[11,13],correctli:3,could:[2,5,6],count:14,cours:12,cpu:[2,3,12],cpu_add:4,creat:[3,4,5,6,7,8,11,12,14],create_r:7,create_read:[7,8,14],create_ring_nam:7,crucial:14,ctag:3,ctrl:0,ctype:[2,3],cuda:[0,2,6,7,8],cuda_en:7,cuda_host:2,cuda_runtime_api:1,cudafreehost:11,cufft:[2,8],current:[7,14],custom:[4,9,13],daisi:12,data:[2,4,5,7,8,11,13,14],data_access:1,data_s:[7,8],data_typ:7,data_view:7,datatyp:[5,8,11,14],date:3,datetim:14,dcode:14,debug:[5,7],debug_en:7,decid:2,declar:1,decomposit:2,dedispers:[7,8],dedisperseblock:7,deepcopi:14,deeper:6,def:[5,6,14],defaultdict:7,defaulthighinputlat:7,defaulthighoutputlat:7,defaultlowinputlat:7,defaultlowoutputlat:7,defaultsampler:7,defin:[5,7,12],define_output_nfram:[7,8],define_valid_input_spac:[7,8],definin:14,definit:[5,7],delai:7,delet:[1,7],demo:5,depth:8,deriv:[7,8],describ:[5,8,14],descript:[2,5,7],design:[4,12],desir:[2,8],detail:3,detect:[2,7,11],detectblock:8,determin:[2,8],develop:[11,12],devic:11,diagnost:14,diagram:5,dict:[5,8],dictionari:[5,7,8,14],did:0,did_header_chang:7,differ:[0,2,5,7,8,12],digit:12,dim:7,dimens:[5,8,13,14],dimension:[1,5,7,8],direct:8,directio:7,directli:6,directori:[3,4,11,14],disabl:3,dish:8,disk:[2,8],dispers:[7,8],dispersion_measur:7,distibut:7,docstr:6,document:[0,1,2,5],doe:[5,7,8,12,14],doesn:14,doing:[3,14],don:3,done:[2,8],dot:5,dot_graph:[7,14],down:[5,14],downgrad:7,download:3,dsp:12,dst:[7,8],dstack:5,dstackblock:5,dtype:[4,5,8,9,11,14],dtype_str:7,dual:7,dummi:[1,5,7],durat:7,dure:5,each:[2,5,6,7,8,12,14],eachoth:5,earliest:7,eas:[2,3,12],echo:0,edit:[3,4],effici:8,effort:14,either:[8,12],element:[2,5,7,8,12,14],els:[7,14],embodi:5,empti:[5,6,7],empty_lik:7,enclos:7,end:[0,1,2,3,4,7],end_writ:7,enforc:[4,7],enforce_header_standard:7,ensur:2,enter:[3,8],entir:3,entireti:2,entri:7,environ:0,eran:8,eras:7,error:[0,7],essenti:[3,4],etc:[3,4],ethernet:12,evenli:7,everi:[0,14],everyth:[3,5],exampl:[0,3,6,7,8,11,12,13,14],except:7,execut:[2,5,7,11],execute_workspac:7,exit:7,exit_stack:7,expand_dim:[9,13],experi:3,explan:[8,14],explicitli:[6,14],expon:[7,8],extens:8,extern:[4,5],extra:[2,5,7,13,14],exuber:3,f16:7,f32:[4,8,14],factor:8,fake:7,fals:[7,8,9],famili:7,fast:[8,11],fch1:7,fdmt:11,fdmtblock:8,fed:5,feed:[2,5],fft:[2,11,13],fft_output:2,fftblock:[5,7,8],fftshift:[7,11],fftshiftblock:8,fid:7,figur:6,fil:[2,7],file:[2,3,4,7,8,11,12,13,14],file_ext:8,file_obj:14,file_object:7,filelist:13,filenam:[2,7,8,14],fileno:7,fill:[5,7],filterbank:[2,7,8],find:[1,11],fine_tim:[2,13],finish:7,first:[2,3,5,6,7,8,11],fit:[1,7,11],fix:0,flatten:[7,13],flattend:7,flexibl:12,flip:8,float32:[8,14],flow:12,flush:7,fmt:7,foff:7,fold:7,foldblock:7,folder:[0,3],follow:[2,3,5],form:[5,12],format:[1,2,7],found:[0,2,3,4,8],fourier:[2,8],frame:[2,7,8,14],frame_nbyt:7,frame_offset:7,frames_per_buff:7,framework:12,frb:8,freq:[2,7,8,13],frequenc:[2,7,8],friendli:4,from:[0,1,2,3,4,5,7,8,12,13,14],from_complex64:7,from_spac:7,fromfil:14,front:3,full:[4,6,14],fun:14,func_str:[6,7],fuse:7,futur:[5,14],gcc:3,gener:[1,5,7,8,12],generate_ten_arrai:5,generate_waterfall_matrix:7,get:[0,1,2,4,5,6,7,11,14],get_cor:7,get_current_block_scop:7,get_default_pipelin:[2,7,14],get_devic:7,get_device_count:7,get_nfram:7,get_r:7,get_temp_storag:7,get_with_default:8,get_workspace_s:7,git:3,github:3,give:[2,3,5,6],given:[0,5,7,8],glob:14,goe:2,going:14,good:[8,14],gpu:[2,3,7,8,11,12],gpu_raw_data:2,gpuarrai:11,grab:3,grab_head:7,great:5,guarante:7,guid:11,gulp:[2,5,7,8,14],gulp_nfram:[2,7,8,14],gulp_siz:[5,7,8,14],guppi:[7,8,13],guppi_raw:11,guppirawsourceblock:8,handl:[2,14],handler:14,hang:11,has:[2,4,5,7,12,14],have:[0,2,3,4,5,6,7,8,14],hdr:[7,8],hdr_transform:9,header:[2,4,5,7,8,14],header_dict:7,header_s:7,header_standard:11,header_transform:7,heart:12,heavili:2,hei:2,help:[1,5,7],here:[0,2,3,4,6,14],hermitian:7,heyjud:2,heyjude_short:2,high:[2,5,7,12],histogram:7,hold:[2,7],home:5,hood:6,host_transpos:2,hostapi:7,hostapispecificstreaminfo:7,how:[0,2,3,5,6,8,11,14],hpp:4,http:3,iarrai:7,id2machin:7,id2telescop:7,id_:7,idata:[7,14],ident:[5,8],ifft:7,ifftblock:7,ignor:6,ignore_unit:9,igulp_nfram:7,imag:[6,7,12],imagenam:7,imagin:2,immut:4,implement:12,implicitli:2,importerror:11,improv:12,in_1:[5,7],in_2:[5,7],in_nfram:14,includ:[1,4,8],incom:[5,7,8],increment:7,indata:14,index:[6,7,11],indic:[5,7,8],infer:8,infinit:0,info:[4,14],inform:[2,7],infrastructur:6,init:7,initi:[1,5,7,14],inplac:7,input:[2,5,7,8,12,14],input_data:7,input_devic:7,input_head:7,input_nfram:[7,8],input_r:7,input_span:5,insert:[2,7],insert_zeros_evenli:7,insid:[2,3,5,7],inspan1:5,inspan2:5,inspan:7,instal:[2,4,8,11],install_lib_dir:0,instanc:[2,5],instance_count:7,instead:5,instruct:3,integ:[2,7],integr:4,interact:3,interest:[1,3,7],interfac:4,interferomet:8,intermedi:2,intern:5,interpret:[2,7,13],interpret_head:7,interv:7,introduct:11,invers:[7,8],invert:8,iostream:4,ipython:4,iread:[8,14],iring:[7,8,14],irings:7,irings_:7,is_complex:7,is_floating_point:7,is_fused_with:7,is_integ:7,is_real:7,is_sign:7,iseq:[7,8,14],islic:7,isn:14,ispan:[7,8,14],issu:0,items:7,itemsize_bit:7,iter:7,iterate_ring_read:7,iterate_ring_writ:7,itertool:7,its:[0,2,5,7,14],itself:[4,5],izip:[5,7],job:14,join_al:7,jone:8,json:7,jude:2,just:[2,3,4,6,12],kei:[5,6,8],keyword1:7,keyword:[7,8],kind:12,know:[2,3,5],known:12,kurtosi:7,kurtosisblock:7,kwarg:[6,7,8,14],label:[2,7,8,9,13],lambda:7,languag:4,largest:7,last:[1,7],later:[1,2,5,13],law:8,layout:2,ld_library_path:0,ledatelescop:3,len:14,length:5,let:[2,3,6,14],level:2,lib64:0,lib:11,libbifrost:[4,11],libbifrost_obj:4,libcudart:11,librari:[2,3,4,7,11],like:[2,3,5,8,12,14],limit:12,linalg:11,line:[0,2,3],linearli:7,link:0,list:[2,3,5,6,7,8,14],littl:14,load:[2,5,7,11,12,14],load_by_filenam:7,load_by_pid:7,load_set:[5,7],load_user_head:7,local:[0,1,3,7],local_addr:7,locat:7,logfil:5,longer:13,look:[3,6,8,14],lookup:14,loop:5,low:7,lucki:14,machine2id:7,machine_id:7,made:5,magic:4,mai:[5,7,12,14],main:[2,5,7],make:[0,2,3,4,5,14],makefil:4,manag:[3,4,14],mandatori:14,mani:[2,5,8],manipul:2,manual:3,map:[6,11],marker:5,master:3,match:[4,7],math:11,matmul:7,matrix:7,matter:0,matthieudartiailh:3,max:8,max_delai:7,max_dm:8,max_payload_s:7,maxim:4,maxinputchannel:7,maxoutputchannel:7,mean:[0,2],measur:[7,8],member:7,memcpi:[1,7],memcpy2d:7,memori:[1,2,4,8,11,12],memset2d:7,memset:7,memset_arrai:7,merge_ax:[9,13],merge_axi:13,metadata:[2,7,8,14],method:[4,14],mhz:7,might:0,mile:[8,14],minut:2,mirror:5,misplac:5,mjd2unix:8,mjd:[7,8],mode:[2,7,8],modif:[7,8],modifi:[2,7],modul:[2,11],modular:5,modulu:2,more:[2,6,7,14],move:[7,8,12],msg:7,mtu:7,much:[5,8,14],multi:7,multiaddblock:7,multitransformblock:[5,7],multpil:7,music:2,must:[5,7],my_block:5,my_data:1,my_head:1,my_header_s:1,my_pipelin:5,my_r:1,my_read_sequ:1,my_read_span:1,my_sequ:1,my_span:1,mysequ:1,n_chunk:13,n_iter:14,n_to_add:14,name:[1,2,5,6,7,8,11,14],name_nbit2numpi:[7,14],nativ:7,navig:3,nbit:[5,7,14],nbyte:1,nchan:7,ndarrai:[2,6,8,11,14],ndim:4,necessari:[5,7,8],need:[0,2,3,4,5,7,14],neg:7,negative_delai:[7,8],neither:14,nelement:4,nest:7,network:5,nevertheless:12,new_data:8,new_unit:7,newest:3,newkei:8,next:[2,14],nframe:[7,8,14],nframe_or_start:7,nice:4,nif:7,nocuda:3,non:7,none:[0,6,7,8,9],notat:6,note:[2,5,8,14],noth:[5,7],now:[2,3,4,5,7,14],np_dtype:14,npol:7,nringlet:[1,7],nsampl:7,nsrc:7,nteger:2,ntime:7,num_contiguous_el:4,num_output:7,number:[1,5,7,8,14],number_zero:7,numer:7,numpi:[4,5,7,8,13,14],numpy2bifrost:7,numpy2str:7,numpyblock:[5,7],numpysourceblock:[5,7],nvcc:0,nvidia:3,oarrai:7,obj:8,object:[2,4,5,7,8,11,14],obsbw:7,observ:[7,8],obsfreq:7,obsnchan:7,odata:[7,14],oddli:7,ofek:8,off:1,offload:2,offset:7,ohdr:14,ohead:7,old:9,old_data:8,old_head:7,old_unit:7,on_data:[7,8,14],on_sequ:[7,8,14],on_sequence_end:[7,8],onc:[2,3,4,5,8,12],one:[0,2,5,7,8,12,13,14],one_over_wavelength:13,onli:[2,3,5,7,12],onlin:2,onto:[2,7],open:[1,4,5,7,8,11,14],open_earliest_sequ:7,open_latest_sequ:7,open_sequ:7,open_sequence_at:7,oper:[2,3,5,6],optim:2,option:[7,8,14],order:[5,7],organ:5,origin:[2,7,14],orings:7,oseq:7,oserror:11,ospan:[7,8,14],other:[0,4,5,7,8,12],other_obj:7,our:[1,2,4,5,14],ourselv:14,out:[1,3,5,6,7,8,12,14],out_1:[5,7],out_2:[5,7],out_arrai:7,out_nfram:14,out_sum:7,outer:[6,7],outgo:[5,7],outgoing_shap:5,output:[2,4,5,6,7,8,12,14],output_devic:7,output_r:7,outsid:12,outspan:5,over:[2,7,8],own:[2,5,14],ownbuff:7,owner:7,pack:7,packag:[2,3,7],packet:7,pad:7,padeviceinfo:7,page:[2,5,11],pair:5,param:7,paramet:[5,7,8,14],parent:[7,14],parent_graph:7,pars:[3,7],part:[2,4,5,6],particular:14,particularli:[7,12],pass:[1,2,4,7,14],pastreamparamet:7,path:[0,8],per:[2,5,7,8,14],perform:[0,2,7,12],period:7,phase:8,pid:7,piec:14,pipe:[5,12],pipelin:[0,3,4,6,8,9,11],place:5,plai:4,pleas:[0,3],plot:[7,12],plug:14,point:[1,2,7,8,12],pointer:[1,4,7],pol:[2,7,8,13],polar:8,port:7,portabl:12,portaudio:[8,11],portaudioerror:7,possibl:7,pow:[6,7],power:[6,7,8],pprint:[5,14],prefix:5,prepar:13,preprint:8,present:7,previou:7,previous:[2,5],print:[1,4,5,6,7,8,14],print_head:[7,11],printf:1,printheaderblock:8,printstuffblock:14,probabl:0,problem:11,proceed:5,process:[2,3,5,7,12,13],proclog:11,produc:[5,7,8],product:[5,6,7,8],profil:8,program:[3,11,12],propag:14,properti:3,provid:[4,6,12,13],ptr:7,puls:8,pulsar:8,pulsarcentr:7,purpos:[7,8,12],push:[8,12],put:[1,2,5,7,14],pyclibrari:[4,11],pypa:3,pyplot:7,python:[0,8,11,12,13],quantiz:[2,11],quantizeblock:8,question:[5,7],quick:8,quit:0,quot:7,radio:[8,12],rais:[0,6,7],rang:5,rapid:12,rare:7,rate:[7,12],ravel:5,raw:[2,7,8,13],raw_data:2,raw_fre:7,raw_get_spac:7,raw_input:5,raw_malloc:7,rawdatafil:7,read:[0,1,2,5,7,8,12,13,14],read_audio:8,read_data:7,read_guppi_raw:[8,13],read_head:7,read_sigproc:8,read_wav:[2,8],readabl:1,reader:[7,8,14],readi:[3,14],readinto:7,readsequ:7,readspan:7,real:[5,6,7],real_output:8,reassign:5,rebuild:4,receiv:5,recommend:3,recompil:4,record:7,recv:7,redefin:7,refdm:7,refer:[2,5,11],referenc:[6,7],reference_frequ:7,reflect:8,regardless:5,releas:7,remote_addr:7,renam:5,rename_axi:[9,13],repositori:14,repres:7,requant:8,requir:[2,3,5,6,7,8,14],reserv:[1,7],reserve_span:7,reshap:[5,8,13],reshape_inspan:7,resiz:[1,7],rest:4,result:[7,8],revers:[7,11],reverseblock:8,rfi:7,right:7,ring2:11,ring:[0,2,4,5,8,11,13,14],ring_nam:[5,7],ring_transf:7,ring_view:7,ringlet:7,ringwrit:7,road:12,root:4,rstrip:14,run:[0,1,2,3,4,7,8,12,14],runtim:14,runtimeerror:7,safe:7,safeti:5,sai:8,said:2,same:[0,4,5,7,8],sampl:[2,7],sampleformat:7,satisfi:5,save:[5,7,14],save_waterfall_plot:7,scalar:[2,6,7,8],scale:[7,8,9],scene:2,screen:14,scrunch:[7,11],scrunchblock:8,seamlessli:5,search:[0,8,11],sec:7,second:[5,7,8,14],section:[5,7],see:[2,4,5,6,7,8],seek:7,seek_to_data:7,segfault:7,segment:2,select:7,self:[5,7,14],semant:7,send:[2,4,7],sendmani:7,sent:7,sep:7,separ:7,sequenc:[1,5,7,8,14],sequence_callback:7,sequence_nam:7,sequence_nringlet:7,sequence_time_tag:7,sequencebas:7,seri:[2,7,8,12],serv:2,set:[0,1,2,5,6,7,8,14],set_cor:7,set_devic:7,set_openmp_cor:7,setup:[2,3,14],setuptool:3,sever:3,shall:14,shape:[4,5,6,7,13,14],share:[7,11,12],share_temp_storag:7,shift:8,ship:2,should:[0,1,2,3,5,7,8,14],show:4,shutdown:7,shutdown_on_sign:[2,7],sign:7,signal:[7,12],significantli:12,sigproc2:11,sigproc:[2,11],sigprocfil:7,sigprocreadblock:7,sigprocset:7,sigprocsinkblock:8,sigprocsourceblock:8,similar:[0,4,13],simpl:[2,3,4,6,7,8,12,14],simpli:[2,7,8],simplifi:14,simul:7,sin_data:14,sinc:2,singl:[2,5,7,8],sink:[2,7,12],sinkblock:[5,7,8,11],sit:2,size:[1,2,5,7,8,14],skip:3,skip_offset:1,skip_time_tag:1,slice:[6,7],slot_ntim:7,slow:12,smallest:7,snippet:4,sock:7,softwar:3,some:[0,1,2,4,5,7,8,12,14],someth:[12,14],sometim:7,song:2,soon:2,sort:[2,14],sourc:[0,2,3,7,12,14],source_nam:7,sourceblock:[5,7,8,11],sourcefil:8,sourcenam:[7,8],space:[2,4,6,8,11,12],space_access:7,span:[1,5,7,14],span_siz:7,spanbas:7,special:[2,4],specif:[3,7,12],specifi:[0,7,14],spectral:7,spectromet:8,speedup:3,split:[2,6,7,13],split_axi:[2,9,13],split_name_nbit:7,split_shap:7,splitterblock:7,squar:[2,8],squish:13,src0:7,src:[4,7,8],src_dej:7,src_raj:7,stack:5,stamp:7,standard:7,start:[0,7,8,11,12,14],state:5,statement:[5,8],static_cast:1,statu:7,status_str:7,stdio:4,stdlib:4,step:[0,3,13],still:[0,2],stoke:8,stop:[1,7,8,12],storag:[2,12],store:[2,7],str:[8,14],straight:7,straightforward:[3,4],stream:[2,5,7,8,14],stream_synchron:7,stride:[4,7],string2numpi:7,string:[5,6,7,8,14],struct:4,structur:7,structvers:7,stuff:[4,14],sub:[8,14],subclass:[7,14],sublist:5,submodul:11,subpackag:11,subsublist:5,success:3,suck:4,sudo:3,suggestedlat:7,suit:3,sum:8,summat:6,support:[3,7],suppos:[4,6],suppress_fd:7,sure:[0,5,14],symbol:11,synchroni:5,syntax:2,system:[0,3,7,8,12],tab:4,tag:7,take:[2,5,8,12,14],task:[12,14],telescop:[8,12],telescope2id:7,telescope_id:7,tell:[2,3],temp_storag:11,tempstorag:7,tempstoragealloc:7,tensor:7,termin:7,terminolog:[2,5],test:[7,8,14],test_arrai:7,testbench:14,testdata:14,testingblock:[5,7],text:7,thei:[2,5,8],them:[5,6,7,8,12],themselv:[0,4],thi:[0,1,3,4,5,7,8,11,12,13,14],thing:[2,5],those:5,thousand:4,thread:7,three:[4,5,8,12],through:[3,5,7,12,14],throughout:7,throughput:[5,12],time:[2,3,5,7,8,12,13],time_chunk:13,time_tag:7,timeout:[0,7],to_complex64:7,todo:7,tofil:[7,14],togeth:[5,6,7,11,12,14],took:2,tool:3,toolkit:3,total_byt:7,total_span:7,transform:[2,7,8,12],transform_unit:7,transformblock:[7,8,11],transport:12,transpos:[2,11,13],transposeblock:8,treat:12,trickier:14,trigger:14,trip:11,trivial:[0,5],troubl:0,truncat:7,try_join:7,tsamp:7,tstart:7,tupl:7,turn:5,tutori:2,twice:5,two:[0,4,5,6,7,13,14],txt:5,type:[0,2,5,7,8,14],type_:7,typic:7,ubuntu:3,udp_captur:11,udp_socket:11,udp_transmit:11,udpcaptur:7,udpsocket:7,udptransmit:7,uint8:7,uncom:3,undefin:11,under:6,underli:13,union:7,uniqu:[7,14],unique_ring_nam:7,unit:[9,11],unix2mjd:8,unix:8,unknown:8,unlik:12,unpack:11,unpackblock:8,unpipelin:12,unsign:7,unsur:8,updat:[7,8],upgrad:7,usag:4,use:[2,3,4,5,7],used:[2,5,6,7,8,12],useful:[4,13,14],uselessaddblock:14,user:[0,2,3,5,7],uses:[7,8,12],using:[0,2,4,7,8,11,14],util:4,val:7,valid:[5,7,8],valu:[5,7,14],variabl:[1,2,7],variou:[2,7],veri:[4,5],version:[2,3,11],via:[0,4],view:[2,7,11],virtual:0,voltag:12,wai:[6,8,12],walk:3,walkthrough:11,want:[1,2,3,4,5,8],water:12,waterfal:7,waterfall_matrix:7,waterfallblock:7,wav:[2,7,11],wav_read_chunk_desc:8,wav_read_head:8,wav_read_subchunk_desc:8,wav_read_subchunk_fmt:8,wav_write_head:8,wavsinkblock:8,wavsourceblock:8,well:[5,8,12],what:[2,3,5,6],whatev:0,when:[5,7,8],whenc:7,whenev:[5,14],where:[0,2,5,7,8,12],whether:5,which:[0,2,3,4,5,6,7,8,12,14],window:13,wish:[5,6],within:[5,12],without:[2,7,8,12,13],won:7,word:4,work:[2,3,5,6,7,8,14],workspace_ptr:7,workspace_s:7,worth:4,would:[2,3,5,6,8,12],wrap:2,wrapper:12,write:[0,1,2,5,7,8,12,14],write_head:7,write_sigproc:[2,8],write_to:7,write_wav:8,writeabl:7,writeasciiblock:[5,7],writeheaderblock:7,writer:2,writesequ:7,writespan:7,writing_end:7,written:[2,3,5,6],wrote:2,xdata:4,ydata:4,yet:[3,5],yield:5,you:[0,1,2,3,4,5,6,7,8,14],your:[0,3,5,8,11,13],your_first_block:14,za_start:7,zackai:8,zero:[6,7],zeros_lik:7},titles:["8. Common Installation and Execution Problems","11. C++ Developement","3. Create a Pipeline","2. Getting started guide","7. How bifrost fits together","Python API","6. Fast GPU math using bfMap","10. Python Reference","9. Block Library Reference","10.1.1. bifrost.views package","12. C++ Reference","Welcome to Bifrost\u2019s documentation!","1. Introduction to Bifrost","5. Views","4. Your first blocks"],titleterms:{The:[0,14],Using:4,_tensor:14,accumul:8,add_stuff:4,address:7,affin:7,all:2,api:5,arrai:5,audio:8,basic:5,basic_view:9,bfarrai:4,bfmap:6,bifrost:[3,4,7,8,9,11,12],binary_io:8,block:[2,5,7,8,12,14],buffer:[1,12],can:0,cannot:0,code:[2,4],common:0,complet:14,concept:12,content:[7,8,9],contextlib2:3,copi:8,core:[7,12],cpp:4,creat:[1,2],cuda:3,cudafreehost:0,data:[1,12],datatyp:7,depend:3,detect:8,develop:1,devic:7,dict:14,directori:0,document:11,dtype:7,dump:5,exampl:[2,4,5],execut:0,fast:6,fdmt:[7,8],fft:[5,7,8],fftshift:8,file:[0,5],find:0,first:14,fit:4,get:3,gpu:6,gpuarrai:7,graphviz:3,guid:3,guppi_raw:[7,8],hang:0,header_standard:7,here:5,how:4,importerror:0,indic:11,instal:[0,3],introduct:12,let:5,lib:0,libbifrost:[0,7],libcudart:0,librari:[0,8],linalg:7,load:1,map:7,math:6,matplotlib:3,memori:7,modifi:3,modul:[0,7,8,9],name:0,ndarrai:[4,7],numpi:3,object:0,open:0,oserror:0,other:3,packag:9,perform:5,pint:3,pip:3,pipelin:[2,5,7,12,14],portaudio:7,print_head:8,problem:0,proclog:7,program:0,pyclibrari:[0,3],python:[3,4,5,7],quantiz:[7,8],refer:[7,8,10],result:5,revers:8,ring2:7,ring:[1,7,12],scrunch:8,sequenc:12,share:0,sigproc2:7,sigproc:[7,8],simplejson:3,sinkblock:14,sourceblock:14,space:7,span:12,start:[3,5],stream:12,submodul:[7,8,9],subpackag:7,symbol:0,syntax:5,tabl:11,temp_storag:7,text:5,thi:2,togeth:4,transformblock:14,transpos:[7,8],trip:4,udp_captur:7,udp_socket:7,udp_transmit:7,undefin:0,unit:7,unpack:[7,8],using:6,version:7,view:[9,13],walkthrough:2,wav:8,welcom:11,wrap:4,your:[4,14]}})