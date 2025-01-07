import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User2, Activity, Cpu } from "lucide-react";
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

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="/placeholder.svg"
              alt="Profile Picture"
              width={120}
              height={120}
              className="rounded-full border-4 border-gray-200"
            />
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
            <TabsTrigger value="activities" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Activities
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
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

          <TabsContent value="dsp">
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
                      <img
                        src="/iir-fir-filters.png"
                        alt="IIR and FIR Filters"
                        width={800}
                        height={400}
                        className="rounded-lg"
                      />
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            IIR (Infinite Impulse Response) Filters
                          </h3>
                          <p className="text-gray-600">
                            IIR filters are digital filters with infinite
                            impulse response. They use feedback and can achieve
                            a given filtering characteristic using less memory
                            and calculations than a similar FIR filter.
                          </p>
                          <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                            <li>Can be unstable due to feedback</li>
                            <li>
                              More efficient in terms of computation and memory
                            </li>
                            <li>Non-linear phase response</li>
                            <li>Examples: Butterworth, Chebyshev filters</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            FIR (Finite Impulse Response) Filters
                          </h3>
                          <p className="text-gray-600">
                            FIR filters are digital filters with a finite
                            impulse response. They are always stable and can
                            have exact linear phase, but typically require more
                            computation and memory than IIR filters for similar
                            filtering characteristics.
                          </p>
                          <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                            <li>Always stable</li>
                            <li>Can have exactly linear phase</li>
                            <li>
                              Higher order required for sharp cutoff frequencies
                            </li>
                            <li>
                              Examples: Moving average, windowed-sinc filters
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="activities">
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
          </TabsContent>
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
