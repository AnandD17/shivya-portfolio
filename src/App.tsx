import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User2, Cpu, Briefcase } from "lucide-react";
import Butterfly2 from "@/assets/butterfly-2.png";
import Butterfly1 from "@/assets/butterfly-1.jpg";
import dft1 from "@/assets/dft-1.jpg";
import dft2 from "@/assets/dft-2.jpg";
import fft1 from "@/assets/fft-1.jpg";
import fft2 from "@/assets/fft-2.jpg";
import idft1 from "@/assets/idft-1.jpg";
import idft2 from "@/assets/idft-2.jpg";
import ifft1 from "@/assets/ifft-1.jpg";
import overlap1 from "@/assets/oad-1.jpg";
import overlap2 from "@/assets/oad-2.png";
import overlap3 from "@/assets/oad-3.jpg";
import osm1 from "@/assets/osm-1.jpg";
import osm2 from "@/assets/osm-2.png";
import osm3 from "@/assets/osm-3.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";

import iirBil from "@/assets/iir-bil.png";
import iirButter from "@/assets/iir-butter.jpg";
import iirCheby from "@/assets/iir-cheby.jpg";
import iirImp from "@/assets/iir-imp.png";
import fir1 from "@/assets/fir-1.png";
import fir2 from "@/assets/fir-2.png";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold">
                Shiva Kallanagoudar
              </h1>
              <p className="text-gray-600 mt-2">Student</p>
              <p className="text-gray-600">
                Department of Electronics and Communication Engineering
              </p>
              <p className="text-gray-600">KLE Technological University</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList className="grid grid-cols-3 gap-4">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User2 className="w-4 h-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="dsp" className="flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              DSP
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Projects
            </TabsTrigger>
            {/* <TabsTrigger value="activities" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Activities
            </TabsTrigger> */}
          </TabsList>

          <TabsContent value="profile" className="pt-10">
            <Tabs defaultValue="about" className="space-y-4">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">About Me</h2>
                    <p className="text-gray-600">
                      I am a student at KLE Technological University, where I am
                      pursuing a Bachelor of Technology in Electronics and
                      Communication Engineering. My academic journey has been
                      focused on gaining a strong foundation in electronics and
                      communication systems, with a particular interest in
                      digital signal processing.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Education</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>
                        B.Tech in Electronics and Communication Engineering
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="contact" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Contact</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Email: 01fe22bev042@kletech.ac.in</li>
                      <li>Phone: +91 90192 58728</li>
                      <li>
                        Address: KLE Technological University, Hubballi,
                        Karnataka, India
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="dsp" className="pt-10">
            <Tabs defaultValue="butterfly" className="space-y-4">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <TabsTrigger value="butterfly">Butterfly Model</TabsTrigger>
                <TabsTrigger value="dft">DFT vs IDFT</TabsTrigger>
                <TabsTrigger value="fft">FFT vs IFFT</TabsTrigger>
                <TabsTrigger value="overlap">Overlap Methods</TabsTrigger>
                <TabsTrigger value="filters">IIR & FIR</TabsTrigger>
              </TabsList>

              <TabsContent value="butterfly">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Butterfly Method
                    </h2>
                    <div className="space-y-4">
                      <div className="flex gap-10 flex-wrap">
                        <img
                          src={Butterfly1}
                          alt="Butterfly diagram"
                          className="rounded-lg w-[300px]"
                        />
                        <img
                          src={Butterfly2}
                          alt="Butterfly diagram"
                          className="rounded-lg w-[300px]"
                        />
                      </div>
                      <p className="text-gray-600">
                        The Butterfly Method is a computational technique used
                        in the Fast Fourier Transform (FFT) to efficiently
                        compute the Discrete Fourier Transform (DFT). It is
                        named "butterfly" because of the shape of the flow
                        diagram depicting the computational structure of the
                        algorithm. The method exploits symmetry and periodicity
                        properties of the complex exponential in the DFT to
                        reduce computational redundancy.
                      </p>

                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>
                          <strong>Purpose</strong>- Efficient computation of DFT
                          using divide-and-conquer approach.
                        </li>
                        <li>
                          <strong>Process</strong>- Divide input → Apply
                          butterfly operations → Combine results.
                        </li>
                        <li>
                          <strong>Advantages</strong>- Computational efficiency,
                          scalability, supports real-time processing.
                        </li>
                        <li>
                          <strong>Disadvantages</strong>- Requires specific
                          input sizes, complex implementation, numerical
                          precision issues.
                        </li>
                        <li>
                          <strong>Applications</strong>- Audio processing,
                          communications, image analysis, radar, and medical
                          imaging.
                        </li>
                      </ul>
                      <p className="text-gray-600">
                        The butterfly method is a foundational tool in DSP,
                        enabling fast and efficient computation of Fourier
                        transforms. By breaking down large problems into smaller
                        ones, it facilitates real-time signal processing in
                        various practical applications.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="dft">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">DFT vs IDFT</h2>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            DFT (Discrete Fourier Transform)
                          </h3>
                          <img src={dft1} alt="" className="w-[300px]" />
                          <img src={dft2} alt="" className="w-[300px]" />
                          <p className="text-gray-600">
                            The Discrete Fourier Transform (DFT) is a
                            mathematical technique used in Digital Signal
                            Processing (DSP) to analyze the frequency content of
                            discrete-time signals. It converts a finite sequence
                            of equally spaced samples from the time domain into
                            a sequence of complex numbers representing the
                            signal's frequency components.
                          </p>
                          <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>
                              <strong>Purpose</strong>- Frequency analysis,
                              signal transformation, spectral representation.
                            </li>
                            <li>
                              <strong>Process</strong>- Sample signal → Compute
                              DFT → Analyze magnitude/phase → Optionally apply
                              IDFT.
                            </li>
                            <li>
                              <strong>Advantages</strong>- Accurate frequency
                              analysis, simple computations, wide applications,
                              FFT-ready.
                            </li>
                            <li>
                              <strong>Disadvantages</strong>- High computational
                              cost, limited resolution, spectral leakage,
                              aliasing.
                            </li>
                          </ul>
                          <p className="text-gray-600 mt-2">
                            By understanding its purpose, process, advantages,
                            and disadvantages, the DFT becomes a valuable tool
                            in digital signal processing and related fields.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            IDFT (Inverse Discrete Fourier Transform)
                          </h3>
                          <img src={idft1} alt="" className="w-[300px]" />
                          <img src={idft2} alt="" className="w-[300px]" />
                          <p className="text-gray-600">
                            The Inverse Discrete Fourier Transform (IDFT) is a
                            mathematical operation that transforms
                            frequency-domain data back into the time-domain
                            representation. It is the counterpart to the
                            Discrete Fourier Transform (DFT) and plays a
                            critical role in reconstructing the original signal
                            from its frequency components
                          </p>
                          <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>
                              <strong>Purpose</strong>- Reconstruct original
                              signal, facilitate time-domain analysis.
                            </li>
                            <li>
                              <strong>Process</strong>- Start with X[k] → Apply
                              IDFT formula → Get x[n]
                            </li>
                            <li>
                              <strong>Advantages</strong>- Accurate
                              reconstruction, complements DFT, practical in DSP
                              tasks.
                            </li>
                            <li>
                              <strong>Disadvantages</strong>- Computationally
                              expensive, noise-sensitive, resolution-dependent.
                            </li>
                          </ul>
                          <p className="text-gray-600 mt-2">
                            By understanding the IDFT's purpose, process,
                            advantages, and disadvantages, you can effectively
                            use it in various signal processing applications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="fft">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">FFT vs IFFT</h2>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            FFT (Fast Fourier Transform)
                          </h3>
                          <img src={fft1} alt="" className="w-[300px]" />
                          <img src={fft2} alt="" className="w-[300px]" />
                          <p className="text-gray-600">
                            The Fast Fourier Transform (FFT) is an efficient
                            algorithm to compute the Discrete Fourier Transform
                            (DFT) and its inverse. It significantly reduces the
                            computational complexity of the DFT, making it a
                            cornerstone of modern Digital Signal Processing
                            (DSP).
                          </p>
                          <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>
                              <strong>Purpose</strong>- Efficient computation of
                              DFT for frequency analysis and signal processing
                              tasks.
                            </li>
                            <li>
                              <strong>Process</strong>- Divide signal → Compute
                              sub-DFTs → Combine results via butterfly
                              operations.
                            </li>
                            <li>
                              <strong>Advantages</strong>- Fast, efficient,
                              widely applicable, supports real-time processing.
                            </li>
                            <li>
                              <strong>Disadvantages</strong>- Limited by signal
                              length, susceptible to numerical errors and
                              spectral leakage.
                            </li>
                          </ul>
                          <p className="text-gray-600">
                            The FFT has revolutionized signal processing by
                            enabling fast, efficient, and practical analysis of
                            signals in both research and real-world
                            applications. Understanding its purpose, process,
                            and limitations helps optimize its use in various
                            DSP tasks.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            IFFT (Inverse Fast Fourier Transform)
                          </h3>
                          <img src={ifft1} alt="" className="w-[300px]" />
                          <p className="text-gray-600">
                            The Inverse Fast Fourier Transform (IFFT) is an
                            algorithm that efficiently computes the Inverse
                            Discrete Fourier Transform (IDFT). It is a
                            counterpart to the Fast Fourier Transform (FFT) and
                            is widely used for reconstructing time-domain
                            signals from their frequency-domain representations.
                          </p>
                          <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>
                              <strong>Purpose</strong>- Efficient reconstruction
                              of time-domain signals from frequency-domain data.
                            </li>
                            <li>
                              <strong>Process</strong>- Input X[k]X[k]X[k] →
                              Compute via IFFT → Output x[n]x[n]x[n].
                            </li>
                            <li>
                              <strong>Advantages</strong>- Fast, accurate,
                              supports real-time reconstruction, compatible with
                              FFT.
                            </li>
                            <li>
                              <strong>Disadvantages</strong>- Signal length
                              constraints, numerical precision issues,
                              susceptible to leakage.
                            </li>
                          </ul>
                          <p className="text-gray-600">
                            The IFFT is a critical tool in digital signal
                            processing, enabling fast and accurate
                            reconstruction of time-domain signals. Paired with
                            FFT, it facilitates efficient bidirectional
                            transformations for a wide range of applications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="overlap">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Overlap Save and Overlap Add Method
                    </h2>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            Overlap Save Method
                          </h3>
                          <img src={osm1} alt="" className="w-[300px]" />
                          <img src={osm2} alt="" className="w-[300px]" />
                          <img src={osm3} alt="" className="w-[300px]" />
                          <ol className="list-decimal list-inside space-y-2 text-gray-600 mt-2">
                            <li>
                              <strong>Purpose</strong>: Efficient method for{" "}
                              <strong>linear convolution</strong> using{" "}
                              <strong>FFT</strong> in Digital Signal Processing
                              (<strong>DSP</strong>).
                            </li>
                            <li>
                              <strong>Process: </strong>
                              <ul className="list-disc list-inside space-y-2 text-gray-600 pl-3">
                                <li>
                                  <strong>Segment Input Signal</strong>: Divide
                                  into overlapping blocks of length NNN
                                  (N=L+M−1N = L + M - 1N=L+M−1).
                                </li>
                                <li>
                                  <strong>Overlap: </strong>Each segment
                                  overlaps by L−1L-1L−1 samples (LLL = filter
                                  length).
                                </li>
                                <li>
                                  FFT: Compute FFT of each segment and the
                                  impulse response.
                                </li>
                                <li>
                                  Multiply: Perform pointwise multiplication in
                                  the frequency domain.
                                </li>
                                <li>
                                  IFFT: Apply Inverse FFT to get the filtered
                                  segment.
                                </li>
                                <li>
                                  Discard Overlap: Remove the first L−1L-1L−1
                                  samples from each segment.
                                </li>
                                <li>
                                  Combine Segments: Concatenate valid outputs to
                                  form the final signal.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Advantages: </strong>
                              <ul className="list-disc list-inside space-y-2 text-gray-600 pl-3">
                                <li>
                                  Computational efficiency for long signals.
                                </li>
                                <li>Suitable for real-time filtering.</li>
                              </ul>
                            </li>
                            <li>
                              <strong>Disadvantages: </strong>
                              <ul className="list-disc list-inside space-y-2 text-gray-600 pl-3">
                                <li>Requires careful overlap management.</li>
                                <li>SHandling edge effects can be complex.</li>
                              </ul>
                            </li>
                            <li>
                              <strong>Applications: </strong>
                              <ul className="list-disc list-inside space-y-2 text-gray-600 pl-3">
                                <li>Radar and sonar systems</li>
                                <li>Wireless communication systems</li>
                              </ul>
                            </li>
                          </ol>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            Overlap Add Method
                          </h3>
                          <img src={overlap1} alt="" className="w-[300px]" />
                          <img src={overlap2} alt="" className="w-[300px]" />
                          <img src={overlap3} alt="" className="w-[300px]" />
                          <ol className="list-decimal list-inside space-y-2 text-gray-600 mt-5">
                            <li>
                              <strong>Purpose</strong>: Efficient method for{" "}
                              <strong>linear convolution</strong> using{" "}
                              <strong>FFT</strong> in Digital Signal Processing
                              (<strong>DSP</strong>).
                            </li>
                            <li>
                              <strong>Process: </strong>
                              <ul className="list-disc list-inside space-y-2 text-gray-600 pl-3">
                                <li>
                                  Segment Input Signal: Divide into
                                  non-overlapping blocks of length MMM.
                                </li>
                                <li>
                                  Zero-Pad: Add L−1L-1L−1 zeros to each segment
                                  (LLL = filter length).
                                </li>
                                <li>
                                  FFT: Compute FFT of each zero-padded segment
                                  and the impulse response.
                                </li>
                                <li>
                                  Multiply: Perform pointwise multiplication in
                                  the frequency domain.
                                </li>
                                <li>
                                  IFFT: Apply Inverse FFT to get the filtered
                                  segment.
                                </li>
                                <li>
                                  Add Overlapping Outputs: Overlapping regions
                                  from adjacent segments are added together.
                                </li>
                                <li>
                                  Combine Segments: Concatenate the final
                                  segments to form the output signal.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Advantages: </strong>
                              <ul className="list-disc list-inside space-y-2 text-gray-600 pl-3">
                                <li>
                                  Computational efficiency for long signals.
                                </li>
                                <li>Suitable for real-time filtering.</li>
                              </ul>
                            </li>
                            <li>
                              <strong>Disadvantages: </strong>
                              <ul className="list-disc list-inside space-y-2 text-gray-600 pl-3">
                                <li>
                                  Overlapping addition management is required.
                                </li>
                                <li>Handling edge effects can be tricky..</li>
                              </ul>
                            </li>
                            <li>
                              <strong>Applications: </strong>
                              <ul className="list-disc list-inside space-y-2 text-gray-600 pl-3">
                                <li>Radar and sonar systems</li>
                                <li>Wireless communication systems</li>
                              </ul>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="filters">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">
                      IIR and FIR Filters
                    </h2>
                    <div className="space-y-4">
                      <h4 className="text-xl mt-2 font-semibold">
                        IIR (Infinite Impulse Response)
                      </h4>
                      <p className="mt-2">
                        These filters are digital filters with feedback, meaning
                        their output depends on current and past inputs and
                        outputs. They are efficient, requiring fewer
                        coefficients than FIR filters for similar performance.
                        Common types include Butterworth, Chebyshev, and
                        elliptic filters, used in audio processing,
                        communications, and control systems.
                      </p>
                      <div className="grid grid-cols-2 gap-6 mt-5">
                        <div>
                          <img
                            src={iirButter}
                            className="w-full rounded-lg"
                            alt=""
                          />
                          <h5 className="text-lg mt-2 font-semibold">
                            IIR Butterworth Filter
                          </h5>
                          <ul className="mt-5 pl-3 list-disc list-inside space-y-2 text-gray-600">
                            <li>
                              <strong>Purpose</strong>: Achieve a smooth,
                              ripple-free frequency response in the passband for
                              applications requiring high signal fidelity.
                            </li>
                            <li>
                              <strong>Process</strong>: Design in the analog
                              domain using transfer functions, then convert to
                              digital using methods like bilinear
                              transformation.
                            </li>
                            <li>
                              <strong>Advantages</strong>: Maximally flat
                              response, stable, and suitable for general
                              filtering.
                            </li>
                            <li>
                              <strong>Disadvantages</strong>: Slower roll-off
                              compared to Chebyshev filters, leading to a less
                              sharp frequency cutoff.
                            </li>
                            <li>
                              <strong>Applications</strong>: Audio processing,
                              biomedical signals (ECG), and communication
                              systems.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <img
                            src={iirCheby}
                            className="w-full rounded-lg"
                            alt=""
                          />
                          <h5 className="text-lg mt-2 font-semibold">
                            IIR Chebyshev Filter
                          </h5>
                          <ul className="mt-5 pl-3 list-disc list-inside space-y-2 text-gray-600">
                            <li>
                              <strong>Purpose</strong>: Provide sharper roll-off
                              than Butterworth filters for applications
                              requiring better selectivity.
                            </li>
                            <li>
                              <strong>Process</strong>: Designed in analog form
                              (Type I or II) and converted to digital using
                              methods like bilinear transformation.
                            </li>
                            <li>
                              <strong>Advantages</strong>: Steeper roll-off,
                              fewer filter stages for a given specification.
                            </li>
                            <li>
                              <strong>Disadvantages</strong>: Introduces ripples
                              in either the passband (Type I) or stopband (Type
                              II), which may distort signals.
                            </li>
                            <li>
                              <strong>Applications</strong>: Radar systems,
                              control systems, and instrumentation.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6 mt-5">
                        <div>
                          <img
                            src={iirBil}
                            className="w-full rounded-lg"
                            alt=""
                          />
                          <h5 className="text-lg mt-2 font-semibold">
                            Bilinear Transformation
                          </h5>
                          <ul className="mt-5 pl-3 list-disc list-inside space-y-2 text-gray-600">
                            <li>
                              <strong>Purpose</strong>: Convert analog filters
                              to digital filters while avoiding aliasing.
                            </li>
                            <li>
                              <strong>Process</strong>: Maps the analog s-plane
                              to the digital z-plane using a transformation
                              equation and applies frequency pre-warping to
                              handle warping effects.
                            </li>
                            <li>
                              <strong>Advantages</strong>: Maps the analog
                              s-plane to the digital z-plane using a
                              transformation equation and applies frequency
                              pre-warping to handle warping effects.
                            </li>
                            <li>
                              <strong>Disadvantages</strong>: Introduces
                              frequency warping, requiring pre-warping
                              adjustments.
                            </li>
                            <li>
                              <strong>Applications</strong>: Digital filter
                              design for communication and real-time systems.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <img
                            src={iirImp}
                            className="w-full rounded-lg"
                            alt=""
                          />
                          <h5 className="text-lg mt-2 font-semibold">
                            Impulse Invariant Transformation
                          </h5>
                          <ul className="mt-5 pl-3 list-disc list-inside space-y-2 text-gray-600">
                            <li>
                              <strong>Purpose</strong>: Preserve the impulse
                              response of the analog filter when converting to
                              digital.
                            </li>
                            <li>
                              <strong>Process</strong>: Samples the analog
                              filter's impulse response and reconstructs a
                              digital equivalent.
                            </li>
                            <li>
                              <strong>Advantages</strong>: Maintains time-domain
                              characteristics, simple to implement.
                            </li>
                            <li>
                              <strong>Disadvantages</strong>: Susceptible to
                              aliasing, unsuitable for high-frequency designs
                            </li>
                            <li>
                              <strong>Applications</strong>: Audio synthesis,
                              low-frequency signal processing, and simulation of
                              analog systems.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 mt-20">
                      <h4 className="text-xl mt-2 font-semibold">
                        FIR (Finite Impulse Response):
                      </h4>
                      <p className="mt-2">
                        These filters are digital filters whose output depends
                        only on current and past input values, with no feedback.
                        They are inherently stable and can have linear phase,
                        making them ideal for applications requiring phase
                        accuracy. FIR filters are widely used in audio
                        processing, image filtering, and data smoothing.
                      </p>

                      <p className="mt-10">
                        <strong>
                          Windowing techniques in FIR filter design
                        </strong>{" "}
                        involve multiplying the ideal filter impulse response by
                        a window function to achieve a finite impulse response.
                        These techniques help minimize artifacts like Gibbs
                        oscillations and control the trade-off between main lobe
                        width (transition band) and side lobe level (stopband
                        attenuation). Here are the key windowing techniques:
                      </p>
                      <img src={fir1} alt="" className="w-full" />
                      <h4 className="text-lg mt-2 font-semibold">
                        Equations for every Windowing Techniques:{" "}
                      </h4>
                      <img src={fir2} alt="" className="w-full" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="projects" className="pt-10">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Projects</h2>
                <div className="px-3">
                  <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-1">
                      <img
                        src={project1}
                        className="w-full rounded-lg"
                        alt=""
                      />
                      <img
                        src={project2}
                        className="w-full rounded-lg"
                        alt=""
                      />
                    </div>
                    <div className="col-span-3">
                      The TMS320C6678 is a high-performance Digital Signal
                      Processor (DSP) from Texas Instruments, capable of
                      handling both floating-point and fixed-point operations at
                      speeds up to 1.25 GHz. It boasts advanced features such as
                      multiple core architecture, L1/L2 caches, and a range of
                      external memory interfaces. The processor is equipped with
                      a variety of integrated peripherals, including UART, SPI,
                      I2C, USB, and Gigabit Ethernet. Delivering up to 144
                      GFLOPS and optimized for low power consumption, it is
                      ideal for applications in telecommunications, automotive,
                      medical imaging, and industrial control. Code Composer
                      Studio (CCS) provides a robust development environment for
                      efficient programming and debugging.
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-2">
                      IIR low pass Filter
                    </h4>
                    <p>
                      In this MATLAB code, an IIR low-pass filter is designed
                      using a Butterworth filter to f ilter an audio signal. The
                      code first loads and converts the audio signal to mono,
                      then extracts the first 3 seconds of audio. The FFT is
                      computed to analyze the frequency spectrum of both the
                      original and filtered signals, and the filter is designed
                      with a cutoff frequency of 1000 Hz to pass lower
                      frequencies and attenuate higher ones. The filter is
                      applied using zero-phase filtering via the filtfilt()
                      function to avoid phase distortion. The frequency response
                      of the filter and the time-domain waveforms of the
                      original and f iltered signals are plotted, and the audio
                      signals are played to compare the effect of the low-pass
                      filtering. This method effectively reduces high-frequency
                      noise while preserving the low-frequency components of the
                      signal
                    </p>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-2">
                      MATLAB Code for Audio Signal Filtering with IIR Low-pass
                      Filter
                    </h4>
                    <p>
                      % Load the audio or instrument signal
                      <br />
                      filename = 'WhatsApp Audio 2025-01-04 at 5.08.25
                      PM_1.aac'; % Replace with your uploaded file name
                      <br />
                      if ~isfile(filename)
                      <br />
                      error(['The file "', filename, '" was not found in the
                      current folder or MATLAB Drive.']);
                      <br />
                      end
                      <br />
                      % Read the audio file
                      <br />
                      [x, Fs] = audioread(filename); % Read audio signal and
                      sampling frequency
                      <br />
                      x = mean(x, 2); % Convert to mono if stereo
                      <br />
                      % Extract the first 3 seconds of the audio
                      <br />
                      num_samples = min(3 * Fs, length(x)); % Limit to 3 seconds
                      or less if shorter
                      <br />
                      x_3s = x(1:num_samples);
                      <br />
                      % Analyze the Frequency Spectrum of the Original Signal
                      <br />
                      N = length(x_3s);
                      <br />
                      fft_x = fft(x_3s); % FFT of the signal
                      <br />
                      f = (0:N-1) * (Fs / N); % Frequency vector
                      <br />
                      figure;
                      <br />
                      plot(f(1:N/2), abs(fft_x(1:N/2))); % Single-sided spectrum
                      <br />
                      title('Frequency Spectrum of Original Audio');
                      <br />
                      xlabel('Frequency (Hz)');
                      <br />
                      ylabel('Magnitude');
                      <br />
                      grid on;
                      <br />
                      % Design the FIR Low-pass Filter
                      <br />
                      filter_order = 100; % Higher order for sharper cutoff
                      <br />
                      fc = 1000; % Cutoff frequency (1 kHz)
                      <br />
                      Wn = fc / (Fs / 2); % Normalize cutoff frequency (Fs/2 is
                      the Nyquist frequency)
                      <br />
                      b = fir1(filter_order, Wn, 'low',
                      hamming(filter_order+1)); % FIR filter coefficients
                      <br />
                      a = 1; % FIR filter denominator (FIR filters have no
                      denominator)
                      <br />
                      % Apply the FIR filter using Zero-phase Filtering
                      <br />
                      y_3s = filtfilt(b, a, x_3s);
                      <br />
                      % Plot the Frequency Spectrum of the Filtered Signal
                      <br />
                      fft_y = fft(y_3s);
                      <br />
                      figure;
                      <br />
                      plot(f(1:N/2), abs(fft_y(1:N/2)));
                      <br />
                      title('Frequency Spectrum of Filtered Audio');
                      <br />
                      xlabel('Frequency (Hz)');
                      <br />
                      ylabel('Magnitude');
                      <br />
                      grid on;
                      <br />
                      % Plot the Frequency Response of the FIR Filter
                      <br />
                      [H, f_response] = freqz(b, a, 1024, Fs);
                      <br />
                      figure;
                      <br />
                      plot(f_response, abs(H));
                      <br />
                      title('Frequency Response of the FIR Low-pass Filter');
                      <br />
                      xlabel('Frequency (Hz)');
                      <br />
                      ylabel('Magnitude');
                      <br />
                      grid on;
                      <br />
                      % Play the Original 3-Second Audio Signal
                      <br />
                      disp('Playing original 3-second audio...');
                      <br />
                      sound(x_3s, Fs);
                      <br />
                      pause(length(x_3s) / Fs + 1);
                      <br />
                      % Play the Low-pass Filtered 3-Second Audio Signal
                      <br />
                      disp('Playing filtered 3-second audio...');
                      <br />
                      sound(y_3s, Fs);
                      <br />
                      pause(length(y_3s) / Fs + 1);
                      <br />
                      % Plot the Original and Filtered Signals in Time Domain
                      <br />
                      t = (0:length(x_3s)-1) / Fs; % Time vector for 3 seconds
                      <br />
                      figure;
                      <br />
                      subplot(2, 1, 1);
                      <br />
                      plot(t, x_3s);
                      <br />
                      title('Original 3-Second Audio Signal');
                      <br />
                      xlabel('Time (s)');
                      <br />
                      ylabel('Amplitude');
                      <br />
                      grid on;
                      <br />
                      subplot(2, 1, 2);
                      <br />
                      plot(t, y_3s);
                      <br />
                      title('Low-pass Filtered 3-Second Audio Signal');
                      <br />
                      xlabel('Time (s)');
                      <br />
                      ylabel('Amplitude');
                      <br />
                      grid on;
                      <br />
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Result</h4>
                    <img
                      src={project3}
                      alt="Result"
                      className="w-full max-w-[1000px] rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* <TabsContent value="activities" className="pt-10">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">
                  Academic Activities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="Workshop on AI"
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                    <h3 className="font-semibold">AI Workshop 2023</h3>
                    <p className="text-sm text-gray-600">
                      Conducted a workshop on Artificial Intelligence and its
                      applications in modern technology.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="Research Presentation"
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                    <h3 className="font-semibold">Research Conference 2023</h3>
                    <p className="text-sm text-gray-600">
                      Presented research findings at the International
                      Conference on Computer Science.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="Student Project Exhibition"
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                    <h3 className="font-semibold">Project Exhibition 2023</h3>
                    <p className="text-sm text-gray-600">
                      Organized and supervised the annual student project
                      exhibition showcasing innovative solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent> */}
        </Tabs>
      </main>

      <footer className="bg-white border-t mt-8">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} - 01fe22bev042@kletech.ac.in
          </p>
        </div>
      </footer>
    </div>
  );
}
