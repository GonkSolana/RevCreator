// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Switch } from "@headlessui/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormState, UseFormRegister, UseFormSetValue } from "react-hook-form";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateMarketFormValues } from "../../pages/market/create";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { classNames } from "../../utils/general";

type AdvancedOptionsFormProps = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useAdvancedOptions: boolean;
  register: UseFormRegister<CreateMarketFormValues>;
  formState: FormState<CreateMarketFormValues>;
  setValue: UseFormSetValue<CreateMarketFormValues>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  totalMarketAccountSizes: {
    totalEventQueueSize: number;
    totalRequestQueueSize: number;
    totalOrderbookSize: number;
  };
};
export default function AdvancedOptionsForm({
                                              // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                              useAdvancedOptions,
                                              // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                              register,
                                              // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                              setValue,
                                                          // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                              formState: { errors },
                                              // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                              totalMarketAccountSizes,
                                            }: AdvancedOptionsFormProps) {
    return (
      <div className="space-y-3">
        {/* The rest of your component code remains the same */}
      </div>
  );
}
